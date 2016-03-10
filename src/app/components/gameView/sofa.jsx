import React, { PropTypes } from 'react'
import Seat from './seat'
import DraggableBear from './draggableBear'
import BearPlaceHolder from './bearPlaceHolder'
import C from '../../constants'
import Radium from 'radium'

@Radium
class Sofa extends React.Component {

  // Merge styles: genericStyles, prop.styles, and sofaStyles
  mergeStyles = ( styles, numberOfSeats ) => Object.assign({}, styles, this.getSofaStyles( numberOfSeats ), this.getGenericStyles().sofa )

  getGenericStyles() {
    return {
      sofa: {
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        margin: '0 auto',
        width: '512px',
        bottom: '120px',
        '@media (max-height: 620px)': {
          bottom: '80px'
        },
        '@media (max-height: 540px)': {
          bottom: '40px'
        }
      }
    }
  }

  getSofaStyles = ( numberOfSeats ) => {
    const sofaStyles = {
      twoSeats: {
        backgroundImage: 'url(' + C.SRC_TO_IMAGES.SOFAS['2'] + ')',
        padding: '0px 72px 74px 64px',
        '@media (min-width: 900px)': {
          width: '600px',
          padding: '0px 87px 88px 85px'
        },
        '@media (min-width: 620px) and (max-width: 767px)': {
          padding: '0px 53px 63px 59px',
          width: '400px'
        },
        '@media (min-width: 480px) and (max-width: 619px)': {
          padding: '0px 44px 48px 43px',
          width: '300px'
        },
        '@media (max-width: 479px)': {
          padding: '0% 12% 68px 13%',
          width: '90%'
        }
      },
      threeSeats: {
        backgroundImage: 'url(' + C.SRC_TO_IMAGES.SOFAS['3'] + ')',
        padding: '22px 68px 75px 73px',
        '@media (min-width: 900px)': {
          width: '600px',
          padding: '24px 81px 88px 85px'
        },
        '@media (min-width: 620px) and (max-width: 767px)': {
          padding: '16px 53px 63px 59px',
          width: '400px'
        },
        '@media (min-width: 480px) and (max-width: 619px)': {
          padding: '12px 44px 48px 43px',
          width: '300px'
        },
        '@media (max-width: 479px)': {
          padding: '4% 12% 68px 13%',
          width: '90%'
        }
      },

      fourSeats: {
        backgroundImage: 'url(' + C.SRC_TO_IMAGES.SOFAS['4'] + ')',
        padding: '58px 68px 78px  73px',
        '@media (min-width: 900px)': {
          width: '600px',
          padding: '66px 81px 88px 85px'
        },
        '@media (min-width: 620px) and (max-width: 767px)': {
          padding: '41px 53px 80px 59px',
          width: '400px'
        },
        '@media (min-width: 480px) and (max-width: 619px)': {
          padding: '30px 44px 48px 43px',
          width: '300px'
        },
        '@media (max-width: 479px)': {
          padding: '10% 12% 68px 13%',
          width: '90%'
        }
      }
    }

    switch ( numberOfSeats ) {
    case 2: return sofaStyles.twoSeats
    case 3: return sofaStyles.threeSeats
    case 4: return sofaStyles.fourSeats
    default: return sofaStyles.fourSeats
    }
  }

  renderSeat( bearKey, seatIndex, containerTypeName ) {

    const bear = bearKey !== null ?
      <DraggableBear
        key={ seatIndex }
        index={ seatIndex }
        bearKey={ bearKey }
        bearsSettings={ this.props.bearsSettings } // Pass the bears settings from redux (contains bear keys mapped to image files)
        containerTypeName={ containerTypeName }
        onDrop={ this.props.onDrop }
      /> :
      <BearPlaceHolder
        bearsSettings={ this.props.bearsSettings } // Pass the bears settings from redux (contains bear keys mapped to image files)
      />

    return (
      <Seat
        key={ seatIndex }
        index={ seatIndex }
        containerTypeName={ containerTypeName }
        numberOfSeats={ this.props.numberOfSeats }
      >
        { bear }
      </Seat>
    )
  }

  render() {

    return (
      <div
        className={ C.COMPONENT_NAMES.SOFA }
        style={ this.mergeStyles( this.props.styles, this.props.numberOfSeats ) }
      >
        <div className='flex-seat-container'>

          {
            // Render prop.bearsOnSofa with function prop.renderSeat, both passed from parent
            this.props.bearsOnSofa ? this.props.bearsOnSofa.map( ( bearKey, index ) =>
              this.renderSeat( bearKey, index, C.COMPONENT_NAMES.SOFA )
              ) : null
            }

        </div>
      </div>
    )
  }
}

Sofa.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  bearsOnSofa: PropTypes.array.isRequired,
  onDrop: PropTypes.func.isRequired,
  bearsSettings: PropTypes.object.isRequired
}

export default Sofa
