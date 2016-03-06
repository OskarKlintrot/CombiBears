import React, { PropTypes } from 'react'
import C from '../../constants'
import { Link } from 'react-router'

class Buttons extends React.Component {

  handleBlurBackground() {
    document.getElementById( 'backgroundImage' ).setAttribute( 'style', '-webkit-filter: blur(10px) grayscale(0.3)' )
  }

  render() {

    const styles = {

      icon: {
        height: '100px'
      },

      iconRight: {
        height: '100px',
        float: 'right',
        cursor: 'pointer'
      },

      arrowDiv: {
        position: 'fixed',
        right: '0',
        top: '50%',
        marginTop: '-50px'
      },

      iconRestart: {
        position: 'fixed',
        margin: '60px 0px 0px 749px',
        cursor: 'pointer'
      },
      iconReturn: {
        position: 'fixed',
        margin: '60px 0px 0px 273px'
      }
    }

    return (

      <div>
        <div style={ styles.iconReturn }>
          <Link
            to={ C.ROUTES.GAME }
          >
            <img
              src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
              alt='Icon for returning to game view'
              style={ styles.icon }
            />
          </Link>
        </div>

        <div style={ styles.iconRestart }>
          <Link
            to={ C.ROUTES.START }
            onClick={ this.handleBlurBackground }
          >
            <img
              src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
              alt='Icon for new sofa'
              style={ styles.icon }
            />
          </Link>
        </div>

      </div>
    )
  }
}

Buttons.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default Buttons
