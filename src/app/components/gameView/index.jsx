import React from 'react'
import Sofa from './sofa'

class GameView extends React.Component {
  render() {
    return (
      <Sofa bearPosition={ [1, 0] }/>
    )
  }
}

export default GameView
