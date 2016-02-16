import React from 'react'

class Sofa extends React.Component {
  render() {
    const styles = {
      sofa: {
        position: 'relative',
        marginTop: '50px',
        marginLeft: '200px'
      }
    }
    return (
      <div className='sofa' style={ styles.sofa }>
        { this.props.children }
        <img src='public/pics/sofas/three.png' width='400px' />
      </div>
    )
  }
}

export default Sofa
