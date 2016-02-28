import React, { PropTypes } from 'react'
import Seat from './seat'
import Teddybear from './teddybear'
import C from '../../constants'

const containerTypeName = C.COMPONENT_NAMES.SOFA

class Sofa extends React.Component {

  getSofaStyles() {
    switch ( this.props.bears.length ) {
    case 2: return {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ')',
      width: '450px',
      height: '240px',
      padding: '20px 8px 0 12px'
    }



    case 3: return {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ')',
      width: '500px',
      height: '270px',
      padding: '40px 8px 0 12px'
    }
    case 4: return {
      background: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ')',
      width: '600px',
      height: '300px',
      padding: '70px 75px 0 85px'
    }
    default: return C.SRC_TO_IMAGES.SOFAS['4']
    }
  }


  getSeatsImage() {
    switch ( this.props.bears.length ) {
    case 2: return C.SRC_TO_IMAGES.SOFAS['2']
    case 3: return C.SRC_TO_IMAGES.SOFAS['3']
    case 4: return C.SRC_TO_IMAGES.SOFAS['4']
    default: return C.SRC_TO_IMAGES.SOFAS['4']
    }
  }

  renderSeat( teddyColor, seatIndex ) {
    const bear = typeof teddyColor === "string" ?
      <Teddybear
        key={ seatIndex }
        index={ seatIndex }
        onBeginDrag={ this.props.onBeginDrag }
        color={ teddyColor }
        containerTypeName={ containerTypeName }
      /> :
      null

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        onDrop={ this.props.onDrop }
        canDrop={ bear === null }
        containerTypeName={ containerTypeName }
      >
        { bear }
      </Seat>
    )
  }

  render() {

    const styles = {
      sofa: {
        border: '1px solid #00f',
        background: 'url(' + this.getSeatsImage() + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        bottom: '80px',
        margin: '0 auto',
        left: '0',
        right: '0',
        textAlign: 'center',
        width: '500px',
        height: '220px'
      },
      seatContainer: {
        height: '65%'
        // background: 'rgba(0, 255, 255, 0.5)'
      }
    }

    const sofaStyles = Object.assign({}, styles.sofa, this.getSofaStyles() )

    return (
      <div
        className='sofa'
        style={ sofaStyles }
      >
        <div style={ styles.seatContainer }>
          {
            this.props.bears.map( ( color, index ) =>
              this.renderSeat( color, index )
            )
          }

        </div>
      </div>
    )
  }
}

Sofa.propTypes = {
  bears: PropTypes.arrayOf( PropTypes.string ).isRequired,
  onBeginDrag: PropTypes.func.isRequired
}

export default Sofa
