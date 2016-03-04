import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'

const modalStyles = {
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#FFF'
  },

  sofaList: {
    width: '100%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right',
    background: '#FFF'
  },

  ulSofas: {
    listStyleType: 'none',
    margin: 'auto',
    padding: '15px'
  }

}

const SavedPermutationsFlash = ( props ) => {
  const {
    open,
    handleOpenModal,
    handleCloseModal,
    handleModalCloseRequest,
    style,
    savedPermutations,
    settings
  } = props

  const renderSofa = ( bearsOnSofa, index ) => {
    return (
      <li key={ index }>
        <BasicSofa
          settings={ settings }
          bearsOnSofa={ bearsOnSofa }
        />
      </li>
    )
  }

  return (
    <div>
      <img
        className='float-left'
        src={ C.SRC_TO_IMAGES.ICONS.ARROW_LEFT }
        style={ style }
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
        <div style={ modalStyles.sofaList }>
          <ul style={ modalStyles.ulSofas }>
            {
              savedPermutations.map( ( bearsOnSofa, index ) =>
                renderSofa( bearsOnSofa, index )
                )
              }
          </ul>
        </div>
      </Modal>
    </div>
  )
}

SavedPermutationsFlash.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleModalCloseRequest: PropTypes.func.isRequired,
  style: PropTypes.object,
  savedPermutations: PropTypes.array,
  settings: PropTypes.object.isRequired
}

export default SavedPermutationsFlash
