import React, { PropTypes } from 'react'
import C from '../../constants'
import Sofa from './sofa'
import DraggedTeddy from './draggedTeddy'
import StartingArea from './startingArea'
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
 * ]
 */

class GameView extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      currentlyDraggedColor: C.COLORS.WHITE
    }
  }

  handleDrop( containerTypeName, index ) {

    console.log( 'index -> handleDrop()', containerTypeName, index )

    if ( containerTypeName === "Sofa" ) {

      this.props.addBear( this.state.currentlyDraggedColor, index )

    } else if ( containerTypeName === "StartingArea" ) {


    }
  }

  handleBeginDrag( containerTypeName, index, color ) {
    // TODO: This points to the calling object instead of this class.
    console.log( 'index -> handleBeginDrag(): currently dragged color is now', color )

    this.setState({ currentlyDraggedColor: color })
  }


  render() {
    const styles = {
      gameScene: {
        height: window.innerHeight + 'px'
      }
    }

    // Bind 'this' to GameView on passed methods
    const handleDrop = this.handleDrop.bind( this )
    const handleBeginDrag = this.handleBeginDrag.bind( this )

    return (
      <div style={ styles.gameScene } >
        <DraggedTeddy color={ this.state.currentlyDraggedColor } />
        <Sofa
          onDrop={ handleDrop }
          onBeginDrag={ handleBeginDrag }
          bears={ this.props.currentCombination.bearsOnSofa }
        />
        <StartingArea
          onDrop={ handleDrop }
          onBeginDrag={ handleBeginDrag }
          bears={ this.props.currentCombination.bearsOnStart }
        />
      </div>
    )
  }
}

GameView.propTypes = {
  // bearsOnSofa: PropTypes.arrayOf( PropTypes.string ).isRequired,
  // bearsOnStart: PropTypes.arrayOf( PropTypes.string ).isRequired,
  currentCombination: PropTypes.object.isRequired,
  addBear: PropTypes.func.isRequired,
  removeBear: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => state.game

const mapDispatchToProps = ( dispatch ) => {
  return {
    addBear: ( color, position ) => {
      dispatch( Actions.addBear( color, position ) )
    },
    removeBear: ( position ) => {
      dispatch( Actions.removeBear( position ) )
    }
  }
}

const connectObj = connect( mapStateToProps, mapDispatchToProps )( GameView )
export default DragDropContext(
  touchBackend({ enableMouseEvents: true })
)( connectObj )
