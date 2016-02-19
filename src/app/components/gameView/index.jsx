import React, { PropTypes } from 'react'
import Sofa from './sofa'
import DraggedTeddy from './draggedTeddy'
import StartingArea from './startingArea'
import { connect } from 'react-redux'

// React Drag and Drop
import { DragDropContext } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'


/* TODO: Below is a suggestion for a standard format for data to store in redux.
 At the moment it's stored like that. May change in the future.
 Number of seats is determined by teddySeatArray.length

const teddySeatArray = [
  "orange",
  null,
  "blue",
  "green"
]
const teddyStartingAreaArray = [
  "pink"
]
*/

class GameView extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {

    }
  }

  render() {

    const styles = {
      gameScene: {
        height: window.innerHeight + 'px'
      }
    }

    return (
      <div style={ styles.gameScene } >

        <DraggedTeddy color='white' />

        <Sofa bears={ this.props.bearsOnSofa }/>

        <StartingArea bears={ this.props.bearsOnStart }/>

      </div>
    )
  }
}

GameView.propTypes = {
  bearsOnSofa: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  bearsOnStart: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

// Map redux state to props
const mapStateToProps = ( state ) => state.combination

const mapDispatchToProps = ( dispatch ) => {
  return {}
}

const connectObj = connect( mapStateToProps, mapDispatchToProps )( GameView )
export default DragDropContext( TouchBackend({ enableMouseEvents: true }) )( connectObj )
