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
        color: C.COLORS.WHITE,
        srcIndex: 0,
        srcTypeName: "StartingArea"
      }
    }
  }

  handleDrop( containerTypeName, index ) {

    if ( containerTypeName === C.COMPONENT_NAMES.SOFA ) {

      // Add bear to new sofa seat
      this.props.addBearToSofa( this.state.currentlyDraggedObj.color, index )

      // Remove bear from previous seat
      if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        // From Starting area
        this.props.removeBearFromStart( this.state.currentlyDraggedObj.srcIndex )

      else if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.SOFA )
        // From Sofa
        this.props.removeBearFromSofa( this.state.currentlyDraggedObj.srcIndex )

    } else if ( containerTypeName === C.COMPONENT_NAMES.STARTING_AREA ) {

      // Add bear to new Starting area seat
      this.props.addBearToStart( this.state.currentlyDraggedObj.color, index )

      // Remove bear from previous seat
      if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.STARTING_AREA )
        // From Starting area seat
        this.props.removeBearFromStart( this.state.currentlyDraggedObj.srcIndex )

      else if ( this.state.currentlyDraggedObj.srcTypeName === C.COMPONENT_NAMES.SOFA )
        // From sofa seat
        this.props.removeBearFromSofa( this.state.currentlyDraggedObj.srcIndex )
    }
  }


  handleBeginDrag( containerTypeName, index, color ) {

    this.setState(
      {
        currentlyDraggedObj: {
          color: color,
          srcIndex: index, // We need to save the dragged source index, so we later know which index to delete on successful drop.
          srcTypeName: containerTypeName // Same with type (distinguish between Sofa and Starting Area source type)
        }
      }
    )

  }

  savePermutation() {

    this.props.savePermutation( this.props.currentCombination )

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

      arrowDiv: {
        position: 'absolute',
        right: '0',
        top: '50%',
        marginTop: '-50px'
      },

      iconRestart: {
        bottom: '0',
        right: '0',
        position: 'absolute',
        height: '80px'
      }
    }

    // Bind 'this' to GameView on passed methods
    const handleDrop = this.handleDrop.bind( this )
    const handleBeginDrag = this.handleBeginDrag.bind( this )

    return (
      <div style={ styles.gameScene } >

        <div>
          <Link to={ '/start' }>
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
            onClick={ () => this.savePermutation() }
          />
          <Link to={ '/results' }>
            <img
              src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
              alt='Icon for showing result'
              style={ styles.iconRight }
            />
          </Link>
        </div>

        <DraggedTeddy color={ this.state.currentlyDraggedObj.color } />
        <Sofa
          onDrop={ handleDrop }
          onBeginDrag={ handleBeginDrag }
          bears={ this.props.currentCombination.bearsOnSofa }
        />

        <div>
          <StartingArea
            onDrop={ handleDrop }
            onBeginDrag={ handleBeginDrag }
            bears={ this.props.currentCombination.bearsOnStart }
          />
          <img
            src={ C.SRC_TO_IMAGES.ICONS.RESTART }
            alt='Icon for putting bears back in startingArea'
            style={ styles.iconRestart }
          />
        </div>

        <div style={ styles.arrowDiv }>
          <Link to={ '/saved' }>
            <img
              src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
              alt='Icon for maximizing saved permutations-list'
              style={ styles.icon }
            />
          </Link>
        </div>

      </div>
    )
  }
}

GameView.propTypes = {

  currentCombination: PropTypes.object.isRequired,
  addBear: PropTypes.func.isRequired,
  removeBear: PropTypes.func.isRequired,

  addBearToSofa: PropTypes.func.isRequired,
  removeBearFromSofa: PropTypes.func.isRequired,

  addBearToStart: PropTypes.func.isRequired,
  removeBearFromStart: PropTypes.func.isRequired,

  savePermutation: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => state.game

const mapDispatchToProps = ( dispatch ) => {
  return {
    addBear: ( color, position ) => {
      dispatch( Actions.addBear( color, position ) )
    },
    removeBear: ( position ) => {
      dispatch( Actions.removeBear( position ) )
    },
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
    savePermutation: ( combination ) => {
      dispatch( Actions.savePermutation( combination ) )
    }
  }
}

const connectObj = connect( mapStateToProps, mapDispatchToProps )( GameView )
export default DragDropContext(
  touchBackend({ enableMouseEvents: true })
)( connectObj )
