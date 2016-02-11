import React from 'react'

class Bear extends React.Component {
  render() {
    return (
      <strong>{ this.props.bear.color }</strong>
     )
  }
}

export default Bear
