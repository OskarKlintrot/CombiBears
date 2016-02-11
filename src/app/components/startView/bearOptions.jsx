import React from 'react'
// import Bears from '../../shared/bears/'
import ColorPicker from './colorPicker'

class BearOptions extends React.Component {
  render() {
    return (
      <div id = 'bearOptions'>
        <img id = 'bear1' onClick = {
            ColorPicker.handleClick( this )
          }
        />
        <img id = 'bear2' onClick = {
            ColorPicker.handleClick( this )
          }
        />
        <img id = 'bear3' onClick = {
            ColorPicker.handleClick( this )
          }
        />
        <img id = 'bear4' onClick = {
            ColorPicker.handleClick( this )
          }
        />
      </div>
      /* <Bears>
        { this.props.map( ( bear, key ) => {
          return (
            <div onClick = {
                ColorPicker.handleClick( bear ) } key = { key }
            >{ bear }</div>
          )
        }) }
      </Bears> */
    )
  }
}

export default BearOptions
