import React, { PropTypes } from 'react'
import C from '../../constants'

const styles = {
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: '10%'
  },
  innerArrowBox: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '25%'
  },
  innerSofaBox: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '50%'
  },
  sofa: {
    width: '75%',
    paddingTop: '2.5%'
  },
  arrow: {
    WebkitTransform: 'rotate(90deg)',
    transform: 'rotate(90deg)',
    display: 'block',
    height: '75%',
    margin: '0 auto'
  }
}

const SofaOptions = ( props ) => {
  const {
    selected,
    handleIncreaseNumberOfSeats,
    handleDecreaseNumberOfSeats
  } = props

  const maxNumberOfSeats = 4
  const minNumberOfSeats = 2

  const topArrowStyle = Object.assign(
    {},
    styles.arrow,
    {
      opacity: selected >= maxNumberOfSeats ? '0.3' : '1',
      WebkitFilter: selected >= maxNumberOfSeats ? 'grayscale(1) brightness(1.3)' : '',
      cursor: selected >= maxNumberOfSeats ? 'default' : 'pointer'
    }
  )

  const bottomArrowStyle = Object.assign(
    {},
    styles.arrow,
    {
      opacity: selected <= minNumberOfSeats ? '0.3' : '1',
      WebkitFilter: selected <= minNumberOfSeats ? 'grayscale(1) brightness(1.3)' : '',
      cursor: selected <= minNumberOfSeats ? 'default' : 'pointer'
    }
  )

  return (
    <div style={ styles.box }>
      <div style={ styles.innerArrowBox }>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
          onClick={ selected >= maxNumberOfSeats ? null : handleIncreaseNumberOfSeats }
          style={ topArrowStyle }
          draggable='false'
        ></img>
      </div>
      <div style={ styles.innerSofaBox }>
        <img
          src={ C.SRC_TO_IMAGES.SOFAS[selected] }
          style={ styles.sofa }
          draggable='false'
        ></img>
      </div>
      <div style={ styles.innerArrowBox }>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_RIGHT }
          onClick={ selected <= minNumberOfSeats ? null : handleDecreaseNumberOfSeats }
          style={ bottomArrowStyle }
          draggable='false'
        ></img>
      </div>
    </div>
  )
}

SofaOptions.propTypes = {
  selected: PropTypes.number.isRequired,
  handleIncreaseNumberOfSeats: PropTypes.func.isRequired,
  handleDecreaseNumberOfSeats: PropTypes.func.isRequired
}

export default SofaOptions
