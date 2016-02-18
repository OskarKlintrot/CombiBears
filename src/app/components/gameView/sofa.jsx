import React from 'react'

class Sofa extends React.Component {

  getSeatsImage() {
    switch ( this.props.children.length ) {
    case 2: return 'two'
    case 3: return 'three'
    case 4: return 'four'
    default: return 'four'
    }
  }

  render() {

    const styles = {
      sofa: {
        height: '210px',
        border: '1px solid #00f',
        background: 'url(public/pics/sofas/' + this.getSeatsImage() + '.png)',
        backgroundSize: 'contain',
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
