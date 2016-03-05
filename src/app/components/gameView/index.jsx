import React, { PropTypes } from 'react'
import C from '../../constants'
import Sofa from './sofa'
import DraggedBear from './draggedBear'
import StartingArea from './startingArea'
import Seat from './seat'
import Buttons from './buttons'
import GameScene from './gameScene'
import SavedPermutations from './savedPermutations'
import DraggableBear from './draggableBear.jsx'
import { connect } from 'react-redux'
import Actions from '../../redux/actions/'

// React Drag and Drop
import { DragDropContext } from 'react-dnd'
import touchBackend from 'react-dnd-touch-backend'

class GameView extends React.Component {
  constructor( props ) {
    super( props )

    const bg = document.getElementById( 'backgroundImage' )
    bg.setAttribute( 'style', '-webkit-filter: blur(0) grayscale(0)' )

    this.state = {
      triedToSaveDuplicatePermutation: []
    }
  }

  // This method is triggered on every drop event.
  handleDrop( event ) {

    /* The following values are passed in the event object
      event.bearKey
      event.from.containerTypeName
      event.from.index
      event.to.containerTypeName
      event.to.index
    */

    // If the bear is dropped on the same seat. Abort
    if ( JSON.stringify( event.from ) === JSON.stringify( event.to ) )
      return

    // When dropped on Sofa
    if ( event.to.containerTypeName === C.COMPONENT_NAMES.SOFA ) {

      // Remove bear from previous Starting area seat
      if ( event.from.containerTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        this.props.removeBearFromStart( event.from.index )

      // Or Remove bear from previous Sofa seat
      else if ( event.from.containerTypeName === C.COMPONENT_NAMES.SOFA )
        this.props.removeBearFromSofa( event.from.index )

      this.swapTargetSeatBearIfNeeded( event )

      // Add bear to new sofa seat
      this.props.addBearToSofa( event.bearKey, event.to.index )
    }

    // When dropped on Starting Area
    if ( event.to.containerTypeName === C.COMPONENT_NAMES.STARTING_AREA ) {

      // Remove bear from previous Starting area seat
      if ( event.from.containerTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        this.props.removeBearFromStart( event.from.index )

      // Or Remove bear from previous Sofa seat
      else if ( event.from.containerTypeName === C.COMPONENT_NAMES.SOFA )
        this.props.removeBearFromSofa( event.from.index )

      this.swapTargetSeatBearIfNeeded( event )

      // Add bear to new Starting Area seat
      this.props.addBearToStart( event.bearKey, event.to.index )
    }

    // When dropped on Game Scene (outside of starting area and sofa)
    if ( event.to.containerTypeName === C.COMPONENT_NAMES.GAME_SCENE ) {

      // Only when source is the Sofa
      if ( event.from.containerTypeName === C.COMPONENT_NAMES.SOFA ) {

        // Remove bear from Sofa seat
        this.props.removeBearFromSofa( event.from.index )

        // Add bear to new Starting area seat
        this.props.addBearToStart( event.bearKey, this.getFreeStartSeatIndex() )
      }
    }
  }

  bearExistsOnSeat( contarinerTypeName, index ) {

    return this.getBearKeyForSeat( contarinerTypeName, index ) !== null
  }

  getBearKeyForSeat( contarinerTypeName, index ) {

    if ( contarinerTypeName === C.COMPONENT_NAMES.SOFA )

      return this.props.game.bearsOnSofa[index]

    else if ( contarinerTypeName === C.COMPONENT_NAMES.STARTING_AREA )

      return this.props.game.bearsOnStart[index]
  }

  swapTargetSeatBearIfNeeded( event ) {

    // Check if bear exists on target seat, if it does, move that bear to source seat
    if ( this.bearExistsOnSeat( event.to.containerTypeName, event.to.index ) ) {

      // Get bearKey from taget seat
      const bearKeyOnTargetSeat = this.getBearKeyForSeat( event.to.containerTypeName, event.to.index )

      // Move to Start area seat
      if ( event.from.containerTypeName === C.COMPONENT_NAMES.SOFA )
        this.props.addBearToSofa( bearKeyOnTargetSeat, event.from.index )

      // Move to Sofa seat
      else if ( event.from.containerTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        this.props.addBearToStart( bearKeyOnTargetSeat, event.from.index )
    }
  }

  getFreeStartSeatIndex() {
    return this.props.game.bearsOnStart.findIndex( ( elem ) => elem === null )
  }

  getTotalNumberOfBears() {

    const combinedSeats = this.props.game.bearsOnSofa.concat( this.props.game.bearsOnStart )

    const bearsCount = combinedSeats.filter( ( seat ) => seat !== null )

    return bearsCount.length
  }

  getBearsFromSofa() {
    return this.props.game.bearsOnSofa.filter( ( seat ) => seat !== null )
  }

  savePermutation() {

    // Clone array, or else it will keep reference and will update game.savedPermutations array as game.bearsOnSofa changes
    const bearsToSave = Array.from( this.props.game.bearsOnSofa )

    // Check that this permutation does not already exists

    // const index = !this.props.game.savedPermutations.some( ( permutation ) => JSON.stringify( permutation ) === JSON.stringify( bearsToSave ) ) ) // GET INDEX INSTEAD

    if ( !this.props.game.savedPermutations.some( ( permutation ) => JSON.stringify( permutation ) === JSON.stringify( bearsToSave ) ) ) {

      const numberOfBearsInSofa = this.getBearsFromSofa().length

      // Check that there are enough bears in sofa
      if (
        numberOfBearsInSofa === this.props.game.bearsOnSofa.length ||
        numberOfBearsInSofa === this.getTotalNumberOfBears()
      ) {

        // Save and reset
        this.props.savePermutation( bearsToSave )
        this.props.resetPermutation()
      }

    } else {

      // TODO: The permutation already exists. Visual feedback?

      this.setState({
        triedToSaveDuplicatePermutation: bearsToSave
      })
    }
  }

  renderSeat( bearKey, seatIndex, containerTypeName ) {

    // Bind 'this' to GameView on passed methods
    const handleDrop = this.handleDrop.bind( this )

    const bear = bearKey !== null ?
      <DraggableBear
        key={ seatIndex }
        index={ seatIndex }
        bearKey={ bearKey }
        bearsSettings={ this.props.settings.bears } // Pass the bears settings from redux (contains bear keys mapped to image files)
        containerTypeName={ containerTypeName }
        onDrop={ handleDrop }
      /> :
      null

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        containerTypeName={ containerTypeName }
      >
        { bear }
      </Seat>
    )
  }

  render() {
    const styles = {
      sofa: {
        position: 'fixed',
        bottom: '80px',
        margin: '0 auto',
        left: '0',
        right: '0'
      }
    }

    // Bind 'this' to GameView on passed methods
    const resetPermutation = this.props.resetPermutation.bind( this )
    const savePermutation = this.savePermutation.bind( this )

    return (
      <div>
        <GameScene>
          <Buttons
            onRestart={ resetPermutation }
            onSave={ savePermutation }
          />

          <Sofa
            scale={ 1 }
            numberOfSeats={ this.props.settings.numberOfSeats }
            styles={ styles.sofa }
          >
            {
              this.props.game.bearsOnSofa ? this.props.game.bearsOnSofa.map( ( bearKey, index ) =>
                this.renderSeat( bearKey, index, C.COMPONENT_NAMES.SOFA )
                ) : null
              }
          </Sofa>

          <StartingArea>
            {
              this.props.game.bearsOnStart ? this.props.game.bearsOnStart.map( ( bearKey, index ) =>
                this.renderSeat( bearKey, index, C.COMPONENT_NAMES.STARTING_AREA ) ) : null
              }
          </StartingArea>

        </GameScene>

        <SavedPermutations
          savedPermutations={ this.props.game.savedPermutations }
          settings={ this.props.settings }
          triedToSaveDuplicatePermutationIndex={ this.state.triedToSaveDuplicatePermutation }
        />

        <DraggedBear
          bearsSettings={ this.props.settings.bears } // Pass the bears settings from redux (contains bear keys mapped to image files)
        />

      </div>
    )
  }
}

GameView.propTypes = {

  game: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,

  addBearToSofa: PropTypes.func.isRequired,
  removeBearFromSofa: PropTypes.func.isRequired,
  addBearToStart: PropTypes.func.isRequired,
  removeBearFromStart: PropTypes.func.isRequired,
  resetPermutation: PropTypes.func.isRequired,
  savePermutation: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addBearToSofa: ( color, position ) => {
      dispatch( Actions.addBearToSofa( color, position ) )
    },
    removeBearFromSofa: ( position ) => {
      dispatch( Actions.removeBearFromSofa( position ) )
    },
    addBearToStart: ( color, position ) => {
      dispatch( Actions.addBearToStart( color, position ) )
    },
    removeBearFromStart: ( position ) => {
      dispatch( Actions.removeBearFromStart( position ) )
    },
    resetPermutation: ( position ) => {
      dispatch( Actions.resetPermutation( position ) )
    },
    savePermutation: ( combination ) => {
      dispatch( Actions.savePermutation( combination ) )
    }
  }
}

const connectObj = connect( mapStateToProps, mapDispatchToProps )( GameView )
export default DragDropContext(
  touchBackend({ enableMouseEvents: true })
)( connectObj )
