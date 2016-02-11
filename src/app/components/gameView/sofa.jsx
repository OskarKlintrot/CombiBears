import React from 'react'
import SofaSeat from './sofaSeat'

class Sofa extends React.Component {
  render() {
    return (
      <div>
        Hello I am Sofa
        <b><SofaSeat/></b>
        <b><SofaSeat/></b>
        <b><SofaSeat/></b>
      </div>
    )
  }
}

export default Sofa
