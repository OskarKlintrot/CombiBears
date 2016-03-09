import React, { PropTypes } from 'react'
import BasicBear from '../shared/basicBear'

const BearPlaceHolder = ( props ) => {

  const style = {
    bear: {
      visibility: 'hidden'
    },
    outerDiv: {
      width: '95%',
      margin: 'auto'
    }
  }

  return (
    <div style={ style.outerDiv }>
      <BasicBear
        bear={ props.bearsSettings[0] } // Get bear first bear object from '(redux state).settings.bears' with key
        width='100'
        height='120'
        style={ style.bear }
      />

    </div>
  )
}

BearPlaceHolder.propTypes = {
  bearsSettings: PropTypes.object.isRequired
}

export default BearPlaceHolder
