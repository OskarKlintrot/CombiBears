import React from 'react'
import Seat from './seat'

class Sofa extends React.Component {
  render() {
    return (
      <div className = 'sofa'>
        <img src = 'public/pics/sofas/three.png' width = '400px' />
        <Seat />
      </div>
    )
  }
}

export default Sofa
