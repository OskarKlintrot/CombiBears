import React from 'react'
import C from '../../constants'

const styles = {
  startingArea: {
    display: 'flex',
    alignItems: 'stretch',
    bottom: '10px',
    margin: '0 auto',
    left: '10px',
    position: 'fixed',
    width: '50%'
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
