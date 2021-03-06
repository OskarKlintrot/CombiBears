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
    height: '45%',
    marginTop: '-5%',
    zIndex: 1
  },
  bear: {
    width: '55%',
    margin: '0 auto'
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
    handleDecreaseNumberOfBears,
    bounceBears,
    bounceBearsAnimation1
  } = props

  const maxNumberOfBears = 4
  const minNumberOfBears = 2

  const bearsToRender = []

  const currentAnimation = bounceBearsAnimation1 ?
  'startViewBounce1 2s ease-in 0s infinite alternate' :
  'startViewBounce2 2s ease-in 0s infinite alternate'

  const bearStyle = Object.assign(
    {},
    styles.bear,
    {
      animation: bounceBears ? currentAnimation : 'none',
      WebkitAnimation: bounceBears ? currentAnimation : 'none'
    }
  )

  const topArrowStyle = Object.assign(
    {},
    styles.arrow,
    {
      opacity: numberOfBearsToDisplay >= maxNumberOfBears ? '0.3' : '1',
      WebkitFilter: numberOfBearsToDisplay >= maxNumberOfBears ? 'grayscale(1) brightness(1.3)' : '',
      cursor: numberOfBearsToDisplay >= maxNumberOfBears ? 'default' : 'pointer',
      zIndex: 2
    }
  )

  const bottomArrowStyle = Object.assign(
    {},
    styles.arrow,
    {
      opacity: numberOfBearsToDisplay <= minNumberOfBears ? '0.3' : '1',
      WebkitFilter: numberOfBearsToDisplay <= minNumberOfBears ? 'grayscale(1) brightness(1.3)' : '',
      cursor: numberOfBearsToDisplay <= minNumberOfBears ? 'default' : 'pointer',
      marginTop: '10%'
    }
  )

  let currentBear = 1

  for ( const item in bears ) {
    if ( bears.hasOwnProperty( item ) ) {
      if ( currentBear <= numberOfBearsToDisplay ) {
        bearsToRender.push(
          <div
            className={
              parseInt( item ) % 2 === 1 ?
             'small-5 columns' :
             'small-5 small-offset-1 columns'
            }
            style={ styles.innerBox }
          >
            <Bear
              key={ item }
              bear={ bears[item] }
              bears={ bears }
              updateBear={ updateBear }
              style={ bearStyle }
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
          onClick={ numberOfBearsToDisplay >= maxNumberOfBears ? null : handleIncreaseNumberOfBears }
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
          onClick={ numberOfBearsToDisplay <= minNumberOfBears ? null : handleDecreaseNumberOfBears }
          style={ bottomArrowStyle }
          draggable='false'
        />
      </div>
    </div>
  )
}

export default BearOptions
