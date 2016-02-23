import React from 'react'
import { Link } from 'react-router'
import C from '../../constants'
import Sofa from './sofa'

const styles = {
  icon: {
    height: '100px'
  },

  iconRight: {
    height: '100px',
    float: 'right'
  },

  iconReturn: {
    position: 'absolute',
    marginTop: '200px'
  },

  ulSofas: {
    listStyleType: 'none'
  }
}

const SavedCombinationsView = () => {
  const bears = [{ id: 0, color: C.COLORS.ORANGE }, { id: 1, color: C.COLORS.GREEN }, { id: 2, color: C.COLORS.BLUE }, { id: 3, color: C.COLORS.PINK }]
  const seats1 = [{ seatId: 0, bear: bears[0] }, { seatId: 1, bear: bears[1] }]
  const seats2 = [{ seatId: 0, bear: bears[0] }, { seatId: 1, bear: bears[1] }]
  const seats3 = [{ seatId: 0, bear: bears[0] }, { seatId: 1, bear: bears[1] }]
  const sofas = [{ id: 0, seats: seats1 }, { id: 1, seats: seats2 }, { id: 2, seats: seats3 }]

  return (
    <div>
      <div>
        <h1>Sparade kombinationer</h1>
      </div>
      <div>
        <Link
          to={ '/start' }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
            alt='Icon for new sofa'
            style={ styles.icon }
          />
        </Link>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
          alt='Icon for showing result'
          style={ styles.iconRight }
        />
      </div>
      <div style={ styles.iconReturn }>
        <Link
          to={ '/game' }
        >
          <img
            src={ C.SRC_TO_IMAGES.ICONS.ARROW_RIGHT }
            alt='Icon for returning to game view'
            style={ styles.icon }
          />
        </Link>
      </div>
      <div className='row'>
        <ul style={ styles.ulSofas }>
          { sofas.map( ( sofa ) => {
            return (
              <Sofa
                key={ sofa.id }
                sofa={ sofa }
              />
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default SavedCombinationsView
