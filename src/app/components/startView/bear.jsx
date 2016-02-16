import React from 'react'

class Bear extends React.Component {
  render() {
    const styles = {
      img: {
        width: '50%',
        display: 'inline-block',
        cursor: 'pointer'
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
