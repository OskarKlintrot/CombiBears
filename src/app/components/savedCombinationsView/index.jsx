import React from 'react'
// import { Link } from 'react-router'
import Sofa from './sofa'

class SavedCombinationsView extends React.Component {
  render() {
    return (
      <div>
        <div id = 'top-icons'>
          <img src = 'public/pics/icons/new-sofa.png' alt = 'Icon for new sofa' className = 'icon' />
          <img src = 'public/pics/icons/show-result.png' alt = 'Icon for showing result' className = 'icon' />
        </div>
        <div id = 'icon-return'>
          <img src = 'public/pics/icons/arrow-right.png' alt = 'Icon for returning to game view' className = 'icon' />
        </div>
      </div>
    )
  }
}

export default SavedCombinationsView
