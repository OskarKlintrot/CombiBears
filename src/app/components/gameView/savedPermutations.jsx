import React, { PropTypes } from 'react'
import BasicSofa from '../shared/basicSofa-v2'
import SavedPermutationsFlash from './savedPermutationsFlash'

const styles = {
  savedPermutations: {
    width: '30%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right',
    background: 'transparent'
  },

  arrowDiv: {
    width: '10%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'left',
    background: 'transparent'
  },

  arrowButton: {
    width: '100%',
    cursor: 'pointer'
  },

  sofaList: {
    width: '90%',
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

class SavedPermutations extends React.Component {
  constructor( props ) {
    super( props )
    /* One way of using this.setState() when using ES2015 classes
     * is to either bind this here in the constructor...
     */
    this.onCloseModal = this.onCloseModal.bind( this )
    this.onModalCloseRequest = this.onModalCloseRequest.bind( this )
    this.state = {
      modalIsOpen: false
    }
  }

  onOpenModal = () => {
    this.setState({ modalIsOpen: true })
  };

  onCloseModal() {
    this.setState({ modalIsOpen: false })
  }

  onModalCloseRequest() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if ( this.props.savedPermutations.length > 0 ) {

      const renderSofa = ( bearsOnSofa, index ) => {
        return (
          <li key={ index }>
            <BasicSofa
              settings={ this.props.settings }
              bearsOnSofa={ bearsOnSofa }
            />
          </li>
        )
      }

      return (
        <div style={ styles.savedPermutations }>
          <div style={ styles.arrowDiv }>
            <SavedPermutationsFlash
              style={ styles.arrowButton }
              handleOpenModal={ this.onOpenModal }
              handleCloseModal={ this.onCloseModal }
              handleModalCloseRequest={ this.onModalCloseRequest }
              open={ this.state.modalIsOpen }
              savedPermutations={ this.props.savedPermutations }
              settings={ this.props.settings }
            />
          </div>
          <div style={ styles.sofaList }>
            <ul style={ styles.ulSofas }>
              {
                this.props.savedPermutations.map( ( bearsOnSofa, index ) =>
                  renderSofa( bearsOnSofa, index )
                )
              }
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div style={ styles.savedPermutations }>
      </div>
    )

  }
}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default SavedPermutations
