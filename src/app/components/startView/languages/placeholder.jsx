import React from 'react'
import C from '../../../constants'
import styles from '../shared/commonStyling'

const Placeholder = ( props ) => {
  const { translation } = props
  return (
    <div>
      <h1>{ translation.instructions }</h1>
      <h2>{ translation.startMenu }</h2>
      <h3>{ translation.chooseSofaTitle }</h3>
      <p>{ translation.chooseSofa }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
        style={ styles.arrowButton }
        draggable='false'
      />
      <img
        src={ C.SRC_TO_IMAGES.ICONS.ARROW_RIGHT }
        style={ styles.arrowButton }
        draggable='false'
      />
      <h3>{ translation.chooseBearsTitle }</h3>
      <p>{ translation.chooseBearsSubtitle }</p>
      <img
        src={ C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }
        style={ styles.icon }
        draggable='false'
      />
      <p>{ translation.chooseBears }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.WRONG }
        style={ styles.icon }
        draggable='false'
      />
      <h3>{ translation.startGameTitle }</h3>
      <p>{ translation.startGame }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.START }
        style={ styles.icon }
        draggable='false'
      />
      <h2>{ translation.theGameMainTitle }</h2>
      <h3>{ translation.goalTitle }</h3>
      <p>{ translation.goal }</p>
      <h3>{ translation.placeBearTitle }</h3>
      <p>{ translation.placeBear }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.RESTART }
        style={ styles.icon }
        draggable='false'
      />
      <h3>{ translation.saveSofaTitle }</h3>
      <p>{ translation.saveSofaSubtitle }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.SCREENSHOT }
        style={ styles.icon }
        draggable='false'
      />
      <p>{ translation.saveSofa }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.VIEW_SAVED_PERMUTATIONS }
        style={ styles.icon }
        draggable='false'
      />
      <p>{ translation.saveSofaEnd }</p>
      <h3>{ translation.endGameTitle }</h3>
      <p>{ translation.endGame }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
        style={ styles.icon }
        draggable='false'
      />
      <h2>{ translation.resultSolutionTitle }</h2>
      <h3>{ translation.resultTitle }</h3>
      <p>{ translation.result }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
        style={ styles.icon }
        draggable='false'
      />
      <h3>{ translation.returnToGameTitle }</h3>
      <p>{ translation.returnToGame }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
        style={ styles.icon }
        draggable='false'
      />
      <h3>{ translation.endGameAndReturnTitle }</h3>
      <p>{ translation.endGameAndReturn }</p>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
        style={ styles.icon }
        draggable='false'
      />
    </div>
  )
}

export default Placeholder
