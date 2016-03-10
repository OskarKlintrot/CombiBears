import React from 'react'
import C from '../../constants'
import { Link } from 'react-router'

const styles = {
  button: {
    height: '100px',
    display: 'inline-block',
    cursor: 'pointer'
  }
}

const Buttons = ( props ) => {
  const { children } = props
  return (
    <div className='row'>
      <div className='small-4 medium-3 large-2 columns'>
        <Link
          to={ C.ROUTES.START }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
            alt='Icon for new sofa'
            draggable='false'
            style={ styles.button }
          />
        </Link>
      </div>
      <div className='small-4 medium-6 large-8 columns'>
        { children }
      </div>
      <div className='small-4 medium-3 large-2 columns'>
        <Link
          to={ C.ROUTES.GAME }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
            alt='Icon for returning to game view'
            draggable='false'
            style={ styles.button }
          />
        </Link>
      </div>
    </div>
  )
}

export default Buttons
