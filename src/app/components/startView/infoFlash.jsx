import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import C from '../../constants'
import Radium from 'radium'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
        <h1>Info flash</h1>
        <p>Some information for the teachers and parents.</p>
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
