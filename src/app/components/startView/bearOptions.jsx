import React from 'react'
import Bears from './bears'
import Option from './option'
import ColorPicker from './colorPicker'

class BearOptions extends React.Component {
  render() {
    const optionStyle = {
      content: {
        padding: '15em',
        borderRadius: '50%',
        backgroundColor: 'gray'
      }
    }

    return (
      <Option
        optionElement={ Bears }
        optionStyle={ optionStyle.content }
      />
    )
  }
}

export default BearOptions
