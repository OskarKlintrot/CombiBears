import React, { PropTypes } from 'react'
import C from '../../constants'
import { Link } from 'react-router'
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
      currentlyDraggedColor: null
    }
  }

  handleDrop( containerTypeName, index ) {
    // TODO: This points to the calling object instead of this class.
    console.log( 'index -> handleDrop()', containerTypeName, index )
    // this.state.currentlyDraggedColor <-- wont work. this points to wrong object
    if ( containerTypeName === "Sofa" ) {
      // Manipulate array here, the color being dragged should be in this.state.currentyDraggedColor
    } else if ( containerTypeName === "StartingArea" ) {
      // Manipulate array here, the color being dragged should be in this.state.currentyDraggedColor
    }
  }

  handleBeginDrag( color ) {
    // TODO: This points to the calling object instead of this class.
    console.log( 'index -> handleBeginDrag(): currently dragged color is now', color )
    // this.setState({ currentlyDraggedColor: color }) <--- wont work. this points to wrong object
  }

  render() {
    const styles = {
      gameScene: {
        height: window.innerHeight + 'px'
      },

      icon: {
        height: '100px'
      },

      iconRight: {
        height: '100px',
        float: 'right'
      },

      iconReturn: {
        position: 'absolute',
        marginTop: '200px'
      },

      iconRestart: {
        bottom: '0',
        right: '50%',
        position: 'absolute',
        height: '80px'
      }
    }

    return (
      <div style={ styles.gameScene } >
        <div>
          <Link
            to={ '/start' }
          >
            <img
              src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
              alt='Icon for new sofa'
              style={ styles.icon }
            />
          </Link>
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SAVE_PERMUTATION }
            alt='Icon for saving permutation'
            style={ styles.iconRight }
          />
          <Link
            to={ '/results' }
          >
            <img
              src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
              alt='Icon for showing result'
              style={ styles.iconRight }
            />
          </Link>
        </div>
        <DraggedTeddy color={ C.COLORS.WHITE } />
        <Sofa
          onDrop={ this.handleDrop }
          onBeginDrag={ this.handleBeginDrag }
          handleAddBear={ this.props.addBear }
          handleRemoveBear={ this.props.removeBear }
          bears={ this.props.bearsOnSofa }
        />
        <div>
          <StartingArea
            onDrop={ this.handleDrop }
            onBeginDrag={ this.handleBeginDrag }
            bears={ this.props.bearsOnStart }
          />
          <img
            src={ C.SRC_TO_IMAGES.ICONS.RESTART }
            alt='Icon for putting bears back in startingArea'
            style={ styles.iconRestart }
          />
        </div>
      </div>
    )
  }
}

GameView.propTypes = {
  bearsOnSofa: PropTypes.arrayOf( PropTypes.string ).isRequired,
  bearsOnStart: PropTypes.arrayOf( PropTypes.string ).isRequired,
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
