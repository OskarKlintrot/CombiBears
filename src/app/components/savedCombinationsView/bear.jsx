import React from 'react'

class Bear extends React.Component {
  render() {
    return (
      <img src = { 'public/pics/bears/' + this.props.bear.color + '.png' } alt = 'Image of bear' className = 'saved-combinations-bear'/>
     )
  }
}

export default Bear
