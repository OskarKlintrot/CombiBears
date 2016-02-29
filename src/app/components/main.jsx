import React from 'react'
import C from '../constants'
import { Link } from 'react-router'

const style = {
  backgroundColor: 'rgba(106, 106, 106, 0.77)'
}

const Main = () => {
  return (
    <div style={ style }>
      <h1>Tjo!</h1>
      <h2>
        <Link to={ C.ROUTES.START }>Start</Link>
      </h2>
      <h2>
        <Link to={ C.ROUTES.GAME }>Spel</Link>
      </h2>
      <h2>
        <Link to={ C.ROUTES.SAVED }>Sparade permutationer</Link>
      </h2>
    </div>
  )
}

export default Main
