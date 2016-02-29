import React from 'react'

// skriver ut datan som finns i arrayen
export default class Box extends React.Component {
  render()
  {
    let id = "notselected"

    if( this.props.list.found === 1 )
      id = "selected"


    return ( <div id = { id } > { this.props.list.id } </div> )
  }
}