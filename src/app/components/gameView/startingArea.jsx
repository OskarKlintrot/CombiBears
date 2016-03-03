import React, { PropTypes } from 'react'
import Seat from './seat'
import C from '../../constants'

const styles = {
  startingArea: {
    bottom: '10px',
    margin: '0 auto',
    left: '10px',
    position: 'fixed',
    width: '500px',
    height: '180px'
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
