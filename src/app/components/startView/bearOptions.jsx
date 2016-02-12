import React from 'react'
import Bears from './bears'
import Option from './option'
import ColorPicker from './colorPicker'

class BearOptions extends React.Component {
  render() {
    return (
      <Option>
        <Bears />
      </Option>
    )
  }
}

export default BearOptions
