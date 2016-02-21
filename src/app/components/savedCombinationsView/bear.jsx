import React from 'react'

const styles = {
  bear: {
    width: '100%'
  }
}

const Bear = ( props ) => {
  return (
    <img src={ 'public/pics/bears/' + props.bear.color + '.png' } alt='Image of bear' style={ styles.bear }/>
   )
}

export default Bear
