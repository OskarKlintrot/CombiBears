import React from 'react'

// skriver ut datan som finns i arrayen
export default class Box extends React.Component {
  render()
  {

    let num = 10
    let id = 'found'
    let img = 'public/pics/resultviewimg/'

    if( this.props.list.found === 1 )
    {

      for( let counter = 1; counter < num; counter++ )
      {
        if( this.props.list.answer === counter )
          img += 'b2.png'

      }
    }
    else
    {
      img += 'b1.png'
      id = 'notfound'
    }

    return ( <div id = { id }> <img src= { img } alt='bear'> </img> </div> )
  }
}
