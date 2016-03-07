import React from 'react'

const styles = {

  selected: {

    float: 'left',
    font: '700 53px HelveticaNeue, Helvetica, Arial',
    marginRight: '3px',
    marginTop: '3px',
    padding: '3px',
    color: 'white',
    background: 'rgb(242, 133, 36)',
    border: '4px solid black',
    borderRadius: '4px'
  },

  notselected:{
    float: 'left',
    font: '700 53px HelveticaNeue, Helvetica, Arial',
    marginRight: '3px',
    marginTop: '3px',
    padding: '3px',
    background: '#A75710',
    color:'white',
    border: '4px solid black',
    borderRadius: '4px',
    textsShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
  }

}

const Box = ( props ) => {
  const { list } = props
  return (
    <div style={ list.found === 1 ? styles.selected : styles.notselected } >
      { list.id }
    </div>
  )
}
export default Box
