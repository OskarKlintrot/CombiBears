import React from 'react'
// import { Link } from 'react-router'
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
  const bears = [{ id: 0, color: "orange" }, { id: 1, color: "green" }, { id: 2, color: "blue" }, { id: 3, color: "pink" }]
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
        <img
          src='public/pics/icons/new-sofa.png'
          alt='Icon for new sofa'
          style={ styles.icon }
        />
        <img
          src='public/pics/icons/show-result.png'
          alt='Icon for showing result'
          style={ styles.iconRight }
        />
      </div>
      <div style={ styles.iconReturn }>
        <img
          src='public/pics/icons/arrow-right.png'
          alt='Icon for returning to game view'
          style={ styles.icon }
        />
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
