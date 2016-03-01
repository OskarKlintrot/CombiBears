import React from 'react'

import Box from './box'

export default class BoxInfo2 extends React.Component {

  render()
  {
    return ( <div className = 'foundboard'>
            {
                this.props.CorrectAnswers.map ( ( Box1 ) =>
                {
                  return ( <Box list = { Box1 } key = { Box1.id } /> )
                })
            }
    </div> )
  }
}
