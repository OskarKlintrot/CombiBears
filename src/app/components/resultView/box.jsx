import React from 'react'

const styles = {
  selected: {
    float: 'left',
    font: '3em HelveticaNeue, Helvetica, Arial, sans-serif',
    margin: '0.1em 0.1em 0 0',
    padding: '0.1em',
    color: 'white',
    background: 'rgb(242, 133, 36)',
    border: '0.1em solid #000000',
    borderRadius: '0.1em'
  },
  notselected: {
    float: 'left',
    font: '3em HelveticaNeue, Helvetica, Arial, sans-serif',
    margin: '0.1em 0.1em 0 0',
    padding: '0.1em',
    background: '#A75710',
    color: 'white',
    border: '0.1em solid #000000',
    borderRadius: '0.1em',
    textShadow: '-0.025em -0.025em 0 #000, 0.025em -0.025em 0 #000, -0.025em 0.025em 0 #000, 0.025em 0.025em 0 #000'
  }
}

const Box = ( props ) => {
  const { item } = props
  return (
    <div style={ item.found === true ? styles.selected : styles.notselected } >
      { item.id < 10 ? '0' + item.id.toString() : item.id }
    </div>
  )
}
export default Box
