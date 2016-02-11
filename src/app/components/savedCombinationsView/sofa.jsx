import React from 'react'
import SofaSeat from './sofaSeat'

class Sofa extends React.Component {
  render() {
    return (
      <ul className = 'saved-combinations-ul-bears'>
        { this.props.sofa.map( ( sofaSeat ) => {
          return <SofaSeat sofaSeat = { sofaSeat } key = { sofaSeat.id } />
        }) }
      </ul>
    )
  }
}

export default Sofa
