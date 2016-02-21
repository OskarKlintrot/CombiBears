import React from 'react'
import Bear from './bear'

const style = {
  paddingTop: '3em'
}

class Bears extends React.Component {
  render() {
    return (
      <div
        className='bears'
        style={ style }
      >
        <Bear />
        <Bear />
        <Bear />
        <Bear />
      </div>
    )
  }
}

export default Bears
