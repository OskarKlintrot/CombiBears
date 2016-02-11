import React from 'react'
import SofaSeat from './sofaSeat'

class Sofa extends React.Component {
  render() {
    return (
      <li>
        <ul>
          { this.props.sofa.map( ( sofaSeat ) => {
            return <SofaSeat sofaSeat = { sofaSeat } key = { sofaSeat.id } />
          }) }
        </ul>
      </li>
    )
  }
}

export default Sofa
