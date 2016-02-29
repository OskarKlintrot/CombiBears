import React from 'react'
import { Link } from 'react-router'

const style = {
  backgroundColor: 'rgba(106, 106, 106, 0.77)'
}

const Main = () => {
  return (
    <div style={ style }>
      <h1>Tjo!</h1>
      <h2>
        <Link to={ '/start' }>Start</Link>
      </h2>
      <h2>
        <Link to={ '/saved' }>Sparade kombinationer</Link>
      </h2>
    </div>
  )
}

export default Main
