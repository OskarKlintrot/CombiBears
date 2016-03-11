import React from 'react'
import C from '../../constants'
import Bear from './bear'

const styles = {
  box: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: '10%'
  },
  innerBox: {
    position: 'relative',
    display: 'inline-block'
  },
  innerBearBox: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '50%',
    marginTop: '-10%',
    zIndex: 1
  },
  bear: {
    width: '50%',
    margin: '0 auto',
    WebkitFilter: 'drop-shadow(0 0 0.25em rgba(140, 140, 130, 1))'
  },
  arrow: {
    cursor: 'pointer',
    WebkitTransform: 'rotate(90deg)',
    transform: 'rotate(90deg)',
    display: 'block',
    height: '75%',
    margin: '0 auto'
  },
  innerArrowBox: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '25%'
  }
}

const BearOptions = ( props ) => {
  const {
    bears,
    updateBear,
    numberOfBearsToDisplay,
    handleIncreaseNumberOfBears,
    handleDecreaseNumberOfBears
  } = props

  const maxNumberOfBears = 4
  const minNumberOfBears = 2

  const bearsToRender = []

  const topArrowStyle = Object.assign(
    {},
    styles.arrow,
    {
      display: numberOfBearsToDisplay >= maxNumberOfBears ? 'none' : 'block',
      zIndex: 2
    }
  )

  const bottomArrowStyle = Object.assign(
    {},
    styles.arrow,
    {
      display: numberOfBearsToDisplay <= minNumberOfBears ? 'none' : 'block',
      marginTop: '10%'
    }
  )

  let currentBear = 1

  for ( const item in bears ) {
    if ( bears.hasOwnProperty( item ) ) {
      if ( currentBear <= numberOfBearsToDisplay ) {
        bearsToRender.push(
          <div
            className='small-6 columns'
            style={ styles.innerBox }
          >
            <Bear
              key={ item }
              bear={ bears[item] }
              bears={ bears }
              updateBear={ updateBear }
              style={ styles.bear }
              bearID={ parseInt( item ) }
            />
          </div>
        )
        currentBear += 1
      }
    }
  }

  return (
    <div style={ styles.box }>
      <div style={ styles.innerArrowBox }>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
          onClick={ handleIncreaseNumberOfBears }
          style={ topArrowStyle }
          draggable='false'
        />
      </div>
      <div
        className='bears'
        style={ styles.innerBearBox }
      >
        <div className='row'>
          { bearsToRender[0] }
          { bearsToRender[1] }
        </div>
        <div className='row'>
          { bearsToRender[2] }
          { bearsToRender[3] }
        </div>
      </div>
      <div style={ styles.innerArrowBox }>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_RIGHT }
          onClick={ handleDecreaseNumberOfBears }
          style={ bottomArrowStyle }
          draggable='false'
        />
      </div>
    </div>
  )
}

export default BearOptions
