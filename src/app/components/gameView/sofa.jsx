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

    const seatImgWidth = 1000

    const styles = {
      sofa: {

        border: '1px solid #00f',
        background: 'url(public/pics/sofas/' + this.getSeatsImage() + '.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',

        position: 'absolute',
        bottom: '80px',
        margin: '0 auto',
        left: '0',
        right: '0',
        width: '500px',
        height: '220px'

      },

      seatContainer: {
        height: '65%'
        // background: 'rgba(0, 255, 255, 0.5)'
      }
    }


    return (
      <div className='sofa' style={ styles.sofa }>
        <div style={ styles.seatContainer }>
          {
            this.props.bears.map( this.renderSeat )
          }
        </div>
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
