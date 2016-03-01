import React, { PropTypes } from 'react'
import C from '../../constants'
import Sofa from './sofa'
import DraggedBear from './draggedBear'
import StartingArea from './startingArea'
import Seat from './seat'
import Buttons from './buttons'
import DraggableBear from './draggableBear.jsx'
import { connect } from 'react-redux'
import Actions from '../../redux/actions/'

// React Drag and Drop
import { DragDropContext } from 'react-dnd'
import touchBackend from 'react-dnd-touch-backend'

/* TODO: Below is a suggestion for a standard format for data to store in redux.
 *  At the moment it's stored like that. May change in the future.
 *  Number of seats is determined by teddySeatArray.length
 *
 * const teddySeatArray = [
 *   "orange",
 *   null,
 *   "blue",
 *   "green"
 * ]
 * const teddyStartingAreaArray = [
 *   "pink"
 *   null,
 *   null,
 *   null
 * ]
 */

class GameView extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      currentlyDraggedObj: {
        bearKey: 0,
        srcIndex: 0,
        srcTypeName: C.COMPONENT_NAMES.STARTING_AREA
      }
    }
  }

  handleDrop( containerTypeName, index ) {

    if ( containerTypeName === C.COMPONENT_NAMES.SOFA ) {

      // Add bear to new sofa seat
      this.props.addBearToSofa( this.state.currentlyDraggedObj.bearKey, index )

      // Remove bear from previous seat
      if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        // From Starting area
        this.props.removeBearFromStart( this.state.currentlyDraggedObj.srcIndex )

      else if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.SOFA )
        // From Sofa
        this.props.removeBearFromSofa( this.state.currentlyDraggedObj.srcIndex )

    }

    if ( containerTypeName === C.COMPONENT_NAMES.STARTING_AREA ) {

      // Add bear to new Starting area seat
      this.props.addBearToStart( this.state.currentlyDraggedObj.bearKey, index )

      // Remove bear from previous seat
      if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        // From Starting area seat
        this.props.removeBearFromStart( this.state.currentlyDraggedObj.srcIndex )

      else if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.SOFA )
        // From sofa seat
        this.props.removeBearFromSofa( this.state.currentlyDraggedObj.srcIndex )
    }
  }


  handleBeginDrag( containerTypeName, index, bearKey ) {
    this.setState(
      {
        currentlyDraggedObj: {
          bearKey: bearKey,
          srcIndex: index, // We need to save the dragged source index, so we later know which index to delete on successful drop.
          srcTypeName: containerTypeName // Same with type (distinguish between Sofa and Starting Area source type)
        }
      }
    )
  }

  savePermutation() {
    this.props.savePermutation( this.props.game.bearsOnSofa )
  }

  resetPermutation() {
    this.props.resetPermutation()
  }

  renderSeat( bearKey, seatIndex, containerTypeName ) {

    // Bind 'this' to GameView on passed methods
    const handleDrop = this.handleDrop.bind( this )
    const handleBeginDrag = this.handleBeginDrag.bind( this )

    const bear = bearKey !== null ?
      <DraggableBear
        key={ seatIndex }
        index={ seatIndex }
        onBeginDrag={ handleBeginDrag }
        bearKey={ bearKey }
        bearsSettings={ this.props.settings.bears } // Pass the bears settings (contains bear keys mapped to image files)
        containerTypeName={ containerTypeName }
      /> :
      null

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        onDrop={ handleDrop }
        canDrop={ bear === null }
        containerTypeName={ containerTypeName }
      >
        { bear }
      </Seat>
    )
  }

  render() {
    const styles = {
      gameScene: {
        height: window.innerHeight + 'px'
      },

      sofa: {
        position: 'absolute',
        bottom: '80px',
        margin: '0 auto',
        left: '0',
        right: '0'
      }
    }

    // Bind 'this' to GameView on passed methods
    const resetPermutation = this.resetPermutation.bind( this )
    const savePermutation = this.savePermutation.bind( this )

    return (
      <div style={ styles.gameScene } >

        <Buttons
          onRestart={ resetPermutation }
          onSave={ savePermutation }
        />

        <Sofa
          scale={ 1 }
          numberOfSeats={ this.props.game.bearsOnSofa.length }
          styles={ styles.sofa }
        >
          {
            this.props.game.bearsOnSofa.map( ( bearKey, index ) =>
              this.renderSeat( bearKey, index, C.COMPONENT_NAMES.SOFA )
            )
          }
        </Sofa>

        <StartingArea>
          {
            this.props.game.bearsOnStart.map( ( bearKey, index ) =>
              this.renderSeat( bearKey, index, C.COMPONENT_NAMES.STARTING_AREA )
              )
          }
        </StartingArea>

        <DraggedBear
          bearKey={ this.state.currentlyDraggedObj.bearKey }
          bearsSettings={ this.props.settings.bears } // Pass the bears settings (contains bear keys mapped to image files)
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
