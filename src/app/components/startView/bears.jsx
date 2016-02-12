import React from 'react'
import Bear from './bear'

class Bears extends React.Component {
  render() {
    const style = {
      box: {
        position: 'relative'
      },
      bear: {
        position: 'relative'
      }
    }

    const colors = [
      'blue',
      'green',
      'placeholder',
      'placeholder'
    ]

    return (
      <div
        className='bears'
        style={ style.box }
      >
        { colors.map( ( color, key ) => {
          return (
            <Bear
              color={ color }
              key={ key }
            />
          )
        }) }
      </div>
    )
  }
}

export default Bears
