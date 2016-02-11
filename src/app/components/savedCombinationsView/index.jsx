import React from 'react'
// import { Link } from 'react-router'
import SofaSeat from './sofaSeat'

class SavedCombinationsView extends React.Component {
  getSofa() {
    const bears = this.getBears()
    return [{ id: 0, bear: bears[0] }, { id: 1, bear: bears[1] }, { id: 2, bear: bears[2] }, { id: 3, bear: bears[3] }]
  }

  getBears() {
    return [{ id: 0, color: "orange" }, { id: 1, color: "green" }, { id: 2, color: "blue" }, { id: 3, color: "pink" }]
  }

  render() {
    const sofa = this.getSofa()
    return (
      <div>
        <div id = 'top-icons'>
          <img src = 'public/pics/icons/new-sofa.png' alt = 'Icon for new sofa' className = 'icon' />
          <img src = 'public/pics/icons/show-result.png' alt = 'Icon for showing result' className = 'icon' />
        </div>
        <div id = 'icon-return'>
          <img src = 'public/pics/icons/arrow-right.png' alt = 'Icon for returning to game view' className = 'icon' />
        </div>
        <div>
          <ul>
            { sofa.map( ( sofaSeat ) => {
              return <SofaSeat sofaSeat = { sofaSeat } key = { sofaSeat.id } />
            }) }
          </ul>
        </div>
      </div>
    )
  }
}

export default SavedCombinationsView
