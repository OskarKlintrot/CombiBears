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
        position: 'absolute',
        right: '0',
        top: '50%',
        marginTop: '-50px'
      },

      iconRestart: {
        bottom: '0',
        right: '0',
        position: 'absolute',
        height: '80px',
        cursor: 'pointer'
      }
    }

    return (

      <div>
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
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SAVE_PERMUTATION }
          alt='Icon for saving permutation'
          style={ styles.iconRight }
          onClick={ () => this.props.onSave() }
        />
        <Link
          to={ C.ROUTES.RESULTS }
          onClick={ this.handleBlurBackground }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
            alt='Icon for showing result'
            style={ styles.iconRight }
          />
        </Link>

        <img
          src={ C.SRC_TO_IMAGES.ICONS.RESTART }
          alt='Icon for putting bears back in startingArea'
          style={ styles.iconRestart }
          onClick={ () => this.props.onRestart() }
        />

        <div style={ styles.arrowDiv }>
          <Link
            to={ C.ROUTES.SAVED }
            onClick={ this.handleBlurBackground }
          >
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

Buttons.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default Buttons
