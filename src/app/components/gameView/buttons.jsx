import React, { PropTypes } from 'react'
import C from '../../constants'
import { Link } from 'react-router'

const Buttons = ( props ) => {

  const disabledOpacity = 0.5
  const enabledOpacity = 1

  const handleBlurBackground = () => {
    document.getElementById( 'backgroundImage' ).setAttribute( 'style', '-webkit-filter: blur(10px) grayscale(0.3)' )
  }

  const getResetIconOpacity = () => {

    return props.canRestart ? enabledOpacity : disabledOpacity
  }

  const getSaveIconOpacity = () => {

    return props.canSave ? enabledOpacity : disabledOpacity
  }

  const styles = {

    iconToStart: {
      width: '50%',
      cursor: 'pointer',
      zIndex: 10
    },
    iconToShowResults: {
      width: '50%',
      cursor: 'pointer',
      zIndex: 10
    },
    resetIcon: {
      width: '49%',
      cursor: 'pointer',
      marginRight: '2%',
      zIndex: 10,
      opacity: getResetIconOpacity()
    },
    saveIcon: {
      width: '49%',
      cursor: 'pointer',
      zIndex: 10,
      opacity: getSaveIconOpacity()
    },
    topIconsArea: {
      top: '1%',
      margin: '0 auto',
      left: '0px',
      right: '0px',
      position: 'fixed',
      width: '23%',
      zIndex: 10

    },
    bottomIconsArea: {
      bottom: '1%',
      right: '21%',
      position: 'fixed',
      width: '23%',
      zIndex: 10
    }
  }

  return (

    <div>
      <div style={ styles.topIconsArea }>

        <Link
          to={ C.ROUTES.START }
          onClick={ handleBlurBackground }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
            alt='Icon for new sofa'
            style={ styles.iconToStart }
            draggable='false'
          />
        </Link>
        <Link
          to={ C.ROUTES.RESULTS }
          onClick={ handleBlurBackground }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
            alt='Icon for showing result'
            style={ styles.iconToShowResults }
            draggable='false'
          />
        </Link>

      </div>

      <div style={ styles.bottomIconsArea }>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.RESTART }
          alt='Icon for putting bears back in startingArea'
          style={ styles.resetIcon }
          onClick={ () => props.onRestart() }
          draggable='false'
        />
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SCREENSHOT }
          alt='Icon for saving permutation'
          style={ styles.saveIcon }
          onClick={ () => props.onSave() }
          draggable='false'
        />
      </div>

    </div>
  )
}

Buttons.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  canSave: PropTypes.bool.isRequired,
  canRestart: PropTypes.bool.isRequired
}

export default Buttons
