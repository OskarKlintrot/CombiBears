import React, { PropTypes } from 'react'
import C from '../../constants'
import { Link } from 'react-router'
import Radium from 'radium'

@Radium
class Buttons extends React.Component {

  render() {

    const disabledOpacity = 0.5
    const enabledOpacity = 1

    const handleBlurBackground = () => {
      document.getElementById( 'backgroundImage' ).setAttribute( 'style', '-webkit-filter: blur(10px) grayscale(0.3)' )
    }

    const styles = {

      iconToStart: {
        width: '100px',
        '@media (max-width: 1023px)': {
          width: '80px'
        },
        '@media (max-width: 400px)': {
          width: '60px'
        },
        cursor: 'pointer',
        zIndex: 10,
        float: 'left'
      },
      iconToShowResults: {
        width: '100px',
        '@media (max-width: 1023px)': {
          width: '80px'
        },
        '@media (max-width: 400px)': {
          width: '60px'
        },
        cursor: 'pointer',
        zIndex: 10,
        float: 'right'
      },
      resetIcon: {
        width: '100px',
        '@media (max-width: 1023px)': {
          width: '80px'
        },
        '@media (max-width: 400px)': {
          width: '60px'
        },
        cursor: this.props.canRestart ? 'pointer' : 'auto',
        marginRight: '1%',
        zIndex: 10,
        opacity: this.props.canRestart ? enabledOpacity : disabledOpacity,
        filter: this.props.canRestart ? 'none' : 'grayscale(1) brightness(1.3)',
        WebkitFilter: this.props.canRestart ? 'none' : 'grayscale(1) brightness(1.4)'
      },
      saveIcon: {
        width: '100px',
        '@media (max-width: 1023px)': {
          width: '80px'
        },
        '@media (max-width: 400px)': {
          width: '60px'
        },
        cursor: this.props.canSave ? 'pointer' : 'auto',
        zIndex: 10,
        opacity: this.props.canSave ? enabledOpacity : disabledOpacity,
        filter: this.props.canSave ? 'none' : 'grayscale(100%) brightness(1.3)',
        WebkitFilter: this.props.canSave ? 'none' : 'grayscale(100%) brightness(1.4)'
      },
      topIconsArea: {
        left: '0',
        padding: '2%',
        position: 'fixed',
        width: '82%',
        zIndex: 10

      },
      bottomIconsArea: {
        bottom: '1%',
        right: '20%',
        position: 'fixed',
        zIndex: 10,
        textAlign: 'right',
        width: '80px',
        '@media (max-height: 500px)': {
          width: '71px'
        },
        '@media (min-width: 981px)': {
          width: '210px'
        },
        '@media (max-width: 980px)': {
          width: '130px'
        },
        '@media (max-width: 512px)': {
          width: '71px'
        },
        '@media (max-width: 479px)': {
          width: '130px',
          bottom: 'auto',
          top: '100px'
        }
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
            onClick={ () => this.props.onRestart() }
            draggable='false'
          />
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SCREENSHOT }
            alt='Icon for saving permutation'
            style={ styles.saveIcon }
            onClick={ () => this.props.onSave() }
            draggable='false'
          />
        </div>

      </div>
    )
  }
}

Buttons.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  canSave: PropTypes.bool.isRequired,
  canRestart: PropTypes.bool.isRequired
}

export default Buttons
