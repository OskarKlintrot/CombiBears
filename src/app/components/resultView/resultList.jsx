import React, { PropTypes } from 'react'
import C from '../../constants'

const styles = {
  container: {
    textAlign: 'center',
    fontSize: '3.4em',
    fontFamily: '"comic sans ms",Arial,sans-serif',
    backgroundColor: 'rgba(240, 240, 230, 0.8)',
    border: '0.1em solid rgb(250, 250, 240)',
    borderRadius: '0.2em'
  },
  leftCrown: {
    height: '1.6em',
    marginRight: '10%',
    WebkitTransform: 'rotate(355deg)',
    transform: 'rotate(355deg)'
  },
  rightCrown: {
    height: '1.6em',
    marginLeft: '10%',
    WebkitTransform: 'rotate(5deg)',
    transform: 'rotate(5deg)'
  },
  hidden: {
    display: 'none'
  }

}

const ResultList = ( props ) => {
  const { numberOfFoundPermutations, numberOfCorrectPermutations } = props
  const foundAll = numberOfFoundPermutations === numberOfCorrectPermutations
  return (
    <div style={ styles.container }>

      <img
        src={ C.SRC_TO_IMAGES.ACCESSORIES.YELLOW }
        draggable='false'
        style={ foundAll ? styles.leftCrown : styles.hidden }
      />
     {
        numberOfFoundPermutations +
        '/' +
        numberOfCorrectPermutations
      }
      <img
        src={ C.SRC_TO_IMAGES.ACCESSORIES.YELLOW }
        draggable='false'
        style={ foundAll ? styles.rightCrown : styles.hidden }
      />
    </div>
  )
}

ResultList.propTypes = {
  numberOfFoundPermutations: PropTypes.number.isRequired,
  numberOfCorrectPermutations: PropTypes.number.isRequired
}

export default ResultList
