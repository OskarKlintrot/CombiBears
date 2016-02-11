import React from 'react'
// import { Link } from 'react-router'
import SofaSeat from './sofaSeat'

class SavedCombinationsView extends React.Component {
  getSofa() {
    return [{ id: 0, bear: 0 }, { id: 1, bear: 1 }, { id: 2, bear: 2 }, { id: 3, bear: null }]
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
