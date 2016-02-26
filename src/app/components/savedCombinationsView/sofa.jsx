import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import C from '../../constants'
import Seat from './seat'

const styles = {
  ulBears: {
    listStyleType: 'none',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginLeft: '0px'
  },

  ulSofasLi: {
    display: 'inline-block'
  }
}

const getSofaProps = {
  getSeatCss: function( noOfTotalSeats ) {
    let seatWidth = ''
    const four = 4
    const three = 3
    if ( noOfTotalSeats === four )
      seatWidth = '25%'
    else if ( noOfTotalSeats === three )
      seatWidth = '33%'
    else
      seatWidth = '50%'
    return ({
      display: 'inline-block',
      marginLeft: '0px',
      width: seatWidth
    })
  },
  getSofaBackgroundImg: function( sofaLength ) {
    return ({
      backgroundImage: 'url(' + C.SRC_TO_IMAGES.SOFAS[sofaLength] + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      display: 'block'
    })
  }
}

const Sofa = ( props ) => {
  return (
    <li
      style={ styles.ulSofasLi }
      className='small-4 medium-4 large-4 columns'
    >
      <div
        style={ getSofaProps.getSofaBackgroundImg( props.sofa.bears.length ) }
      >
        <ul style={ styles.ulBears }>
          { props.sofa.bears.map( ( bear ) => {
            return (
              <li
                key={ bear.id }
                style={ getSofaProps.getSeatCss( props.sofa.bears.length ) }
              >
                <Seat
                  key={ bear.id }
                  bear={ bear }
                />
              </li>
            )
          }) }
        </ul>
      </div>
    </li>
  )
}

export default Sofa
