import React from 'react'

const boxStyle = {
  display: 'inline-block',
  font: '3.4em HelveticaNeue, Helvetica, Arial, sans-serif',
  margin: '0.1em 0.1em 0 0',
  padding: '0.1em',
  color: 'white',
  border: '0.1em solid #000000',
  borderRadius: '0.1em',
  cursor: 'default'
}

const selectedBoxStyle = Object.assign(
  {}, boxStyle, { background: 'rgb(242, 133, 36)' }
)

const notSelectedBoxStyle = Object.assign(
  {}, boxStyle, {
    background: '#A75710',
    textShadow: '-0.025em -0.025em 0 #000, 0.025em -0.025em 0 #000, -0.025em 0.025em 0 #000, 0.025em 0.025em 0 #000'
  }
)

const Box = ( props ) => {
  const { item } = props
  return (
    <div style={ item.found === true ? selectedBoxStyle : notSelectedBoxStyle } >
      { item.id < 10 ? '0' + item.id.toString() : item.id }
    </div>
  )
}
export default Box
