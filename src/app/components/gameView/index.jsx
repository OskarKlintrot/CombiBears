import React from 'react'
import Bear from './bear'
import Sofa from './sofa'

class GameView extends React.Component {
  render() {
    return (
      <Sofa>
        <Bear/>
      </Sofa>
    )
  }
}

export default GameView
