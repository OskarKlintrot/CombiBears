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

export default class Box extends React.Component {
  render()
  {


    if( this.props.list.found === 1 )
      return ( <div style = { styles.selected } > { this.props.list.id } </div> )


    return ( <div style = { styles.notselected } > { this.props.list.id } </div> )
  }
}