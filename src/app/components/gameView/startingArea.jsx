import React, { PropTypes } from 'react'
import Seat from './seat'
import C from '../../constants'

const styles = {
  startingArea: {
    border: '1px solid #f0f',
    bottom: '10px',
    margin: '0 auto',
    left: '10px',
    // right: '0',
    position: 'fixed',
    width: '500px',
    height: '150px'
  }
}

const StartingArea = ( props ) => {

  return (
    <div
      className={ C.COMPONENT_NAMES.STARTING_AREA }
      style={ styles.startingArea }
    >
      { props.children }
    </div>
  )
}

StartingArea.propTypes = {

}

export default StartingArea
