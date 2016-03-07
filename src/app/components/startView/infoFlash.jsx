import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import C from '../../constants'
import Radium from 'radium'

const modalStyles = {
  content: {
    position: 'absolute',
    width: '90%',
    margin: '0 auto',
    overflow: 'auto'
  }
}

const styles = {
  infoButton: {
    position: 'fixed',
    height: '100px',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    '@media (max-width: 1023px)': {
      position: 'absolute',
      bottom: '8px',
      right: '25px',
      height: '80px',
      cursor: 'pointer',
      display: 'block',
      margin: '1em auto'
    }
  },

  arrowButton: {
    transform: 'rotate(90deg)',
    height: '75px',
    marginBottom: '15px'
  },
  icon: {
    height: '75px',
    marginBottom: '15px'
  }
}


const InfoFlash = ( props ) => {
  const {
    open,
    handleOpenModal,
    handleCloseModal,
    handleModalCloseRequest,
    style
  } = props

  return (
    <div>
      <img
        src={ C.SRC_TO_IMAGES.ICONS.INFO }
        style={ Object.assign({}, styles.infoButton, style ) }
        onClick={ handleOpenModal }
        draggable='false'
      />
      <Modal
        isOpen={ open }
        onRequestClose={ handleModalCloseRequest }
        style={ modalStyles }
      >
        <button
          className='close-button'
          aria-label='Close alert'
          type='button'
          onClick={ handleCloseModal }
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <h1>Instruktioner</h1>
        <h2>Startmenyn</h2>
        <h3>Välja soffa</h3>
        <p>Välj en soffa med två, tre eller fyra platser genom att bläddra med pilarna.</p>
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
        <h3>Välja björnar</h3>
        <p>Man kan spela med två, tre eller fyra björnar. Lägg till en björn
          genom att klicka på en av plus-knapparna.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }
          style={ styles.icon }
          draggable='false'
        />
        <p>Om du klickar på en björn kommer en pratbubbla upp.
          Du kan välja en annan björn genom att klicka på en accessoar i pratbubblan.
          Det går inte att välja en björn mer än en gång. Om en björn redan är vald är
          dess accessoar grå i pratbubblan och går inte att klicka på.
          Du kan ta bort en björn genom att klicka på knappen med ett kryss på i pratbubblan.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.WRONG }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Starta spelet</h3>
        <p>Klicka på Spela-knappen.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.START }
          style={ styles.icon }
          draggable='false'
        />
        <h2>Spelplanen</h2>
        <h3>Vad spelet går ut på</h3>
        <p>Målet med spelet är att placera ut björnar i soffan och att hitta
          alla olika sätt som man kan placera ut björnarna på (alla möjliga permutationer).
          Tanken bakom spelet är att det ska hjälpa barn i åldersgruppen 6-9 år att lära sig om kombinatorik.
        </p>
        <h3>Placera björnar i soffan</h3>
        <p>Dra björnen från sin pall till soffan och släpp den. Om du vill byta plats på två nallar
          i soffan kan du släppa den ena nallen på den andra. Om du vill flytta ner alla björnar till
          sina pallar på en gång kan du trycka på Börja om-knappen.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.RESTART }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Spara en soffa med nallar</h3>
        <p>
          Spara en soffa genom att trycka på Spara-knappen.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SAVE_PERMUTATION }
          style={ styles.icon }
          draggable='false'
        />
        <p>
          Det går bara att spara en soffa om alla nallar har placerats ut eller om soffan är full.
          Det går inte att spara samma soffa två gånger.
          Om du försöker spara en soffa som redan har sparats så markeras den redan sparade soffan i listan
          till höger med en röd bakgrund. Om du vill få en bättre överblick över de soffor du sparat kan du
          trycka på pilknappen, så kommer ett fönster upp med alla sparade soffor.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
          style={ styles.icon }
          draggable='false'
        />
        <p>
          När du har hittat alla möjliga soffor så tas du till en sida där ditt resultat visas.
        </p>
        <h3>Avsluta spelomgången och återvända till startmenyn</h3>
        <p>Om du trycker på Hem-knappen så avslutas spelomgången och du kommer tillbaka till startmenyn.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
          style={ styles.icon }
          draggable='false'
        />
        <h2>Resultat och lösning</h2>
        <h3>Se resultat</h3>
        <p>Om du trycker på knappen med en bock så ser du hur många och vilka soffor du har hittat och
          hur många soffor du har kvar att hitta.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Se lösning</h3>
        <p>Om du klickar på knappen med en pokal på så ser du de soffor som du inte har hittat.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SHOW_SOLUTION }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Gå tillbaka till spelomgången</h3>
        <p>Om du klickar på knappen med en pil till vänster så kommer du tillbaka till spelomgången.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Avsluta spelomgången och återvända till startmenyn</h3>
        <p>Om du trycker på Hem-knappen så avslutas spelomgången och du kommer tillbaka till startmenyn.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
          style={ styles.icon }
          draggable='false'
        />
        <h1>Instructions</h1>
        <h2>Start menu</h2>
        <h3>Choose a sofa</h3>
        <p>Choose a sofa with two, three or four seats by clicking the arrow buttons.</p>
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
        <h3>Choose bears</h3>
        <p>It is possible to play with two, three or four bears. Add a bear by
          clicking one of the plus buttons.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.BEARS.PLACEHOLDER }
          style={ styles.icon }
          draggable='false'
        />
        <p>If you click on one of the bears a balloon will be shown. You can choose a
          different bear by clicking on one of the accessories in the balloon.
          It is not possible to choose a bear more than once. If a bear is already chosen
          its accessory is greyed out in the balloon and cannot be clicked.
          You can remove a bear by clicking the button with an x on it in the balloon.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.WRONG }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Start the game</h3>
        <p>Click the Play button.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.START }
          style={ styles.icon }
          draggable='false'
        />
        <h2>The game</h2>
        <h3>The goal of the game</h3>
        <p>The goal of the game is to place the bears on the sofa and to find all the different ways
          in which the bears can be placed on the sofa (all possible permutations).
          The game is meant to help children aged 6 to 9 to learn about combinatorics.
        </p>
        <h3>Place bears on the sofa</h3>
        <p>Drag the bear from its stool to the sofa and drop it. If you want to switch the position of
          two bears on the sofa you can drop one of the bears on the other one. If you want to move all of
          the bears back to their stools at once you can click the Restart button.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.RESTART }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Save a sofa with bears</h3>
        <p>
          Save a sofa by clicking the Save button.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SAVE_PERMUTATION }
          style={ styles.icon }
          draggable='false'
        />
        <p>
          You can only save a sofa if all the bears have been placed on the sofa or if the sofa is full.
          It is not possible to save the same sofa twice.
          If you try to save a sofa that has already been saved, the already saved sofa will get a red background
          in the list to the right. If you want to get a better overview of the sofas that you have saved you can
          click the arrow button, and a window with all your saved sofas will be shown.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
          style={ styles.icon }
          draggable='false'
        />
        <p>
          When you have found all possible sofas you will be taken to a page where your result is shown.
        </p>
        <h3>End the game and return to the start menu</h3>
        <p>If you press the Home button the game will end and you will be taken to the start menu.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
          style={ styles.icon }
          draggable='false'
        />
        <h2>Result and solution</h2>
        <h3>See result</h3>
        <p>If you click the button with a tick you will se how many and which sofas you have found and
          how many sofas you have left to find.
        </p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SHOW_RESULT }
          style={ styles.icon }
          draggable='false'
        />
        <h3>See solution</h3>
        <p>If you click the button with a cup you will see the sofas that you have not found.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.SHOW_SOLUTION }
          style={ styles.icon }
          draggable='false'
        />
        <h3>Return to the game</h3>
        <p>If you click the arrow button you will return to the game.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
          style={ styles.icon }
          draggable='false'
        />
        <h3>End the game and return to the start menu</h3>
        <p>If you press the Home button the game will end and you will be taken to the start menu.</p>
        <img
          src={ C.SRC_TO_IMAGES.ICONS.NEW_SOFA }
          style={ styles.icon }
          draggable='false'
        />
      </Modal>
    </div>
  )
}

InfoFlash.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleModalCloseRequest: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default Radium( InfoFlash )
