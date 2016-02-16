import React from 'react'

const Bear = ( props ) => {
  return (
    <img src={ 'public/pics/bears/' + props.bear.color + '.png' } alt='Image of bear' className='saved-combinations-bear'/>
   )
}

export default Bear
