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
      resetIcon: {
        width: '25%',
        cursor: 'pointer',
        marginRight: '5%'
      },
      saveIcon: {
        width: '70%',
        cursor: 'pointer'
      },
      bottomIconsArea: {
        bottom: '0',
        right: '21%',
        position: 'fixed',
        width: '20%',
        border: '1xp solid #0f0'
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
