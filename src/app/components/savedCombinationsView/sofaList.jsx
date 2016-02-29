import React from 'react'
import Sofa from './sofa'

const styles = {
  ulSofas: {
    listStyleType: 'none'
  }
}

const SofaList = ( props ) => {
  return (
    <div className='row'>
      <ul style={ styles.ulSofas }>
        { props.sofas.map( ( sofa ) => {
          return (
            <Sofa
              key={ sofa.id }
              sofa={ sofa }
            />
          )
        }) }
      </ul>
    </div>
  )
}

export default SofaList