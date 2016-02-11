import React, { PropTypes } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}


const InfoFlash = ( props ) => {
  const {
    open,
    handleOpenModal,
    handleCloseModal,
    handleModalCloseRequest
  } = props

  return (
    <div>
      <input
        type = 'button'
        value = 'Info'
        onClick = { handleOpenModal }
      />
      <Modal
        isOpen = { open }
        onRequestClose = { handleModalCloseRequest }
        style = { customStyles }
      >
        <h1>Info flash</h1>
        <p>Some information for the teachers and parents.</p>
        <input
          type = 'button'
          value = 'X'
          onClick = { handleCloseModal }
        />
      </Modal>
    </div>
  )
}

InfoFlash.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleModalCloseRequest: PropTypes.func.isRequired
}

export default InfoFlash
