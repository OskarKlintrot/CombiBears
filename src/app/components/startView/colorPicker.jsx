import React from 'react'

class ColorPicker extends React.Component {
  handleClick( event ) {
    event.preventDefault()
    this.render()
  }

  render() {
    const colors = [
      'blue',
      'green',
      'yellow',
      'red',
      'purple',
      'pink',
      'orange',
      'brown'
    ]

    return (
      <div className='colorPicker'>
        { colors.map( ( color, key ) => {
          return (
            <div className={ 'color' + color } key={ key } />
          )
        }) }
      </div>
    )
  }
}

export default ColorPicker
