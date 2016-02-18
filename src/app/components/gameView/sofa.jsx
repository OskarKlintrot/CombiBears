import React, { PropTypes } from 'react'
import Seat from './seat'
import Teddybear from './teddybear'


class Sofa extends React.Component {

  getSeatsImage() {
    switch ( this.props.bears.length ) {
    case 2: return 'two'
    case 3: return 'three'
    case 4: return 'four'
    default: return 'four'
    }
  }

  renderSeat( teddyColor ) {
    const bear = typeof teddyColor === "string" ?
      <Teddybear color={ teddyColor } /> :
      null

    return (
      <Seat>
        { bear }
      </Seat>
    )
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
      <div className='sofa' style={ styles.sofa }>
        {
          this.props.bears.map( this.renderSeat )
        }
      </div>
    )
  }
}

Sofa.propTypes = {
  bears: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

export default Sofa
