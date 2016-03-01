import React from 'react'

import Box from './box'

export default class BoxInfo extends React.Component {
  render()
  {
    return ( <div className='boards'>
            {
                this.props.NumberOfBearsFound.map ( ( Box1 ) => { return ( <Box list = { Box1 } key = { Box1.id } /> ) })
            }
    </div> )
  }
}