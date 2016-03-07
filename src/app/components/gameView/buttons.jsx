import React, { PropTypes } from 'react'
import C from '../../constants'
import { Link } from 'react-router'

class Buttons extends React.Component {

  handleBlurBackground() {
    document.getElementById( 'backgroundImage' ).setAttribute( 'style', '-webkit-filter: blur(10px) grayscale(0.3)' )
  }

  render() {

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
        width: '25%',
        cursor: 'pointer',
        marginRight: '5%',
        zIndex: 10
      },
      saveIcon: {
        width: '70%',
        cursor: 'pointer',
        zIndex: 10
      },
      topIconsArea: {
        top: '0',
        left: '0',
        position: 'fixed',
        width: '26%',
        zIndex: 10
      },
      bottomIconsArea: {
        bottom: '0',
        right: '21%',
        position: 'fixed',
        width: '20%',
        zIndex: 10
      }
    }

    return (

      <div>
        <div style={ styles.topIconsArea }>

          <Link
            to={ C.ROUTES.START }
            onClick={ this.handleBlurBackground }
          >
            <img
              src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
              alt='Icon for new sofa'
              style={ styles.iconToStart }
            />
          </Link>
          <Link
            to={ C.ROUTES.RESULTS }
            onClick={ this.handleBlurBackground }
          >
            <img
              src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
              alt='Icon for showing result'
              style={ styles.iconToShowResults }
            />
          </Link>

        </div>

        <div style={ styles.bottomIconsArea }>

          <img
            src={ C.SRC_TO_IMAGES.ICONS.RESTART }
            alt='Icon for putting bears back in startingArea'
            style={ styles.resetIcon }
            onClick={ () => this.props.onRestart() }
          />
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SAVE_PERMUTATION }
            alt='Icon for saving permutation'
            style={ styles.saveIcon }
            onClick={ () => this.props.onSave() }
          />
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
