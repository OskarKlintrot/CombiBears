import React from 'react'
import Box from './box'

const styles = {
  boards: {
    width: '650px',
    height: '159px',
    overflowX: 'hidden',
    padding: '0px 10px 10px 13px'
  }
}

const BoxInfo = ( props ) => {
  const { rows } = props
  return (
    <div style={ styles.boards }>
      {
        rows.map( ( item ) => {
          return (
            <Box
              list={ item }
              key={ item.id }
            />
          )
        })
      }
    </div>
  )
}

export default BoxInfo
