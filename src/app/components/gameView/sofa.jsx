import React, { PropTypes } from 'react'
import Bear from './bear'
import Seat from './seat'

const styles = {
  sofa: {
    position: 'relative',
    marginTop: '50px',
    marginLeft: '200px',
    width: '400px',
    height: '200px'
  },
  seatHolder: {
    display: 'inline-block',
    width: '33%',
    height: '100%'
  },
  img: {
    zIndex: -1
  }
}

class Sofa extends React.Component {
  renderSeat( seatNumber ) {
    const container = 1
    const seat = seatNumber

    const [bearContainer, bearSeat] = this.props.bearPosition

    const bear = ( container === bearContainer && seat === bearSeat ) ?
      <Bear /> :
      null
    console.log( bear )
    return (
      <div key={ seatNumber } style={ styles.seatHolder }>
        <Seat>
          { bear }
        </Seat>
      </div>
    )
  }


  render() {
    const seats = []
    for ( let i = 0; i < 3; i++ )
      seats.push( this.renderSeat( i ) )

    return (
      <div className='sofa' style={ styles.sofa }>
        { seats }
        <img src='public/pics/sofas/three.png' style={ styles.img }/>
      </div>
    )
  }
}

Sofa.propTypes = {
  bearPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
}

export default Sofa
