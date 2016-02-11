import React from 'react'
import Teddybear from './teddybear'
import Sofa from './sofa'
import StartingArea from './startingArea'

class GameView extends React.Component {
  render() {
    return (
      <div className='game-scene'>
        <Sofa/>
        <Teddybear/>
        <Teddybear/>
        <Teddybear/>
        <Teddybear/>
        <StartingArea/>
      </div>
    )
  }
}

export default GameView
