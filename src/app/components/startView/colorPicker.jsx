import React from 'react'

class ColorPicker extends React.Component {
  render() {
    const style = {
      box: {
        width: '10em',
        height: '5em',
        backgroundColor: 'darkgray',
        border: '0.1em solid gray',
        zIndex: 9999,
        position: 'absolute',
        top: 0,
        right: 0,
        cursor: 'auto'
      }
    }

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
      <div
        className='colorPicker'
        style={ style.box }
      >
        { colors.map( ( color, key ) => {
          return (
            <div
              className={ 'color' + color }
              key={ key }
              style={ {
                width: '1.5em',
                height: '1.5em',
                margin: '0.25em',
                display: 'inline-block',
                zIndex: 999999,
                backgroundColor: color,
                cursor: 'pointer',
                border: '0.1em solid gray'
              } }
            />
          )
        }) }
      </div>
    )
  }
}

export default ColorPicker
