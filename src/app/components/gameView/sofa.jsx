import React from 'react'
import SofaSeat from './sofaSeat'

class Sofa extends React.Component {
  render() {
    return (
      <div className = 'sofa'>
        <img src = 'public/pics/sofas/three.png' width = '400px' />
        <SofaSeat />
      </div>
    )
  }
}

export default Sofa
