import React, { PropTypes } from 'react'
import C from '../../constants'

const BasicSeat = ( props ) => {
  const styles = {
    seat: {
      display: 'inline-block',
      width: '25%',
      height: '100%',
      zIndex: 1,
      opacity: 1,
      border: '1px solid #f00',
      textAlign: 'center',
      verticalAlign: 'top'
    }
  }

  return (
    <div style={ styles.seat } >
    { props.children }
    </div>
  )
}

BasicSeat.propTypes = {
  index: PropTypes.number.isRequired
}

export default BasicSeat
