import React from 'react'
// import { Link } from 'react-router'
import Sofa from './sofa'

class SavedCombinationsView extends React.Component {
  getSofas() {
    const bears = this.getBears()
    const seats1 = [{ seatId: 0, bear: bears[0] }, { seatId: 1, bear: bears[1] }, { seatId: 2, bear: null }]
    const seats2 = [{ seatId: 0, bear: bears[0] }, { seatId: 1, bear: bears[1] }, { seatId: 2, bear: bears[2] }]
    const seats3 = [{ seatId: 0, bear: bears[0] }, { seatId: 1, bear: bears[1] }, { seatId: 2, bear: bears[2] }, { seatId: 3, bear: bears[3] }]
    return [{ id: 0, seats: seats1 }, { id: 1, seats: seats2 }, { id: 2, seats: seats3 }]
  }
  getBears() {
    return [{ id: 0, color: "orange" }, { id: 1, color: "green" }, { id: 2, color: "blue" }, { id: 3, color: "pink" }]
  }
  render() {
    const sofas = this.getSofas()
    return (
      <div>
        <div>
          <h1>Sparade kombinationer</h1>
        </div>
        <div id='saved-combinations-top-icons'>
          <img src='public/pics/icons/new-sofa.png' alt='Icon for new sofa' className='saved-combinations-icon' />
          <img src='public/pics/icons/show-result.png' alt='Icon for showing result' className='saved-combinations-icon' />
        </div>
        <div id='saved-combinations-icon-return'>
          <img src='public/pics/icons/arrow-right.png' alt='Icon for returning to game view' className='saved-combinations-icon' />
        </div>
        <div>
          <ul className='saved-combinations-ul-sofas'>
            { sofas.map( ( sofa ) => {
              return <Sofa sofa={ sofa } key={ sofa.id } />
            }) }
          </ul>
        </div>
      </div>
    )
  }
}

export default SavedCombinationsView
