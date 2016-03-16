import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import Radium from 'radium'
import C from '../../constants'
import Swedish from './languages/swedish'
import English from './languages/english'
import Placeholder from './languages/placeholder'
import CommonStyling from './shared/commonStyling'

const modalStyles = {
  content: {
    position: 'absolute',
    width: '90%',
    margin: '0 auto',
    overflow: 'auto'
  }
}

const styles = Object.assign({}, CommonStyling, {
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
      display: 'block',
      margin: '1em auto'
    }
  }
})

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
        src={ C.SRC_TO_IMAGES.ICONS.HELP }
        style={ Object.assign({}, styles.infoButton, style ) }
        onClick={ handleOpenModal }
        onTouchStart={ handleOpenModal }
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
        { InfoFlash.renderInfo( Swedish, English ) }
      </Modal>
    </div>
  )
}

InfoFlash.renderInfo = ( ...languages ) => {
  const info = [...languages]
  const render = []
  for ( const item of info ) {
    render.push(
      <Placeholder
        translation={ item }
        key={ info.indexOf( item ) }
      /> )
  }

  return render
}

InfoFlash.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleModalCloseRequest: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default Radium( InfoFlash )
