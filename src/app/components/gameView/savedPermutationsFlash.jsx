import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'

const modalStyles = {
  content: {
    position: 'absolute',
    width: '90%',
    margin: '0 auto',
    overflow: 'auto'
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
      <li className='large-3 medium-3 small-6 columns'
        key={ index }
      >
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
        className=''
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
        <div>
          <ul
            className='large-12 medium-12 small-12 row'
            style={ modalStyles.ulSofas }
          >
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
