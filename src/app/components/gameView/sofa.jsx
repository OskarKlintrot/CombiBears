import React from 'react'
import Seat from './seat'

class Sofa extends React.Component {
  render() {

    const styles = {
      sofa: {
        height: '210px',
        border: '1px solid #00f',
        background: 'url(public/pics/sofas/three.png)',
        backgroundSize: '400px',
        backgroundRepeat: 'no-repeat'
      }
    }

    return (
      <div className = 'sofa' style = { styles.sofa }>
        { this.props.children }
      </div>
    )
  }
}

export default Sofa
