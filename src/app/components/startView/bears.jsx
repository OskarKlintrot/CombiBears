import React from 'react'
import Bear from './bear'

class Bears extends React.Component {
  render() {
    return (
      <div className='bears'>
        <Bear />
        <Bear />
        <Bear />
        <Bear />
      </div>
    )
  }
}

export default Bears
