import React from 'react'

class Bear extends React.Component {
  render() {
    const styles = {
      img: {
        position: 'absolute',
        width: '8%',
        cursor: 'pointer',
        zIndex: '1'
      }
    }

    return (
      <img
        className='bear'
        style={ styles.img }
        src='public/pics/bears/placeholder.png'
      />
    )
  }
}

export default Bear
