import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'
import SavedPermutationsFlash from './savedPermutationsFlash'

const styles = {
  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right',
    background: 'transparent'
  },

  arrowDiv: {
    width: '17%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'left',
    background: 'transparent'
  },

  arrowButton: {
    width: '7%',
    cursor: 'pointer',
    position: 'fixed',
    top: '45%'
  },

  sofaList: {
    width: '83%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right',
    background: 'rgba(240, 240, 230, 0.8)',
    border: 'solid',
    borderWidth: '0px',
    borderLeftWidth: '0.5em',
    borderColor: 'rgb(250, 250, 240)'
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
      const correctAnswers = []
      const md1 = this.props.settings.correctCombinations
      const md2 = this.props.savedPermutations
      for ( let iInLoop = 0; iInLoop < md1.length; iInLoop += 1 ) {
        for ( let jInLoop = 0; jInLoop < md2.length; jInLoop += 1 ) {
          if ( md1[iInLoop][0] === md2[jInLoop][0] && md1[iInLoop][1] === md2[jInLoop][1] &&
               md1[iInLoop][2] === md2[jInLoop][2] && md1[iInLoop][3] === md2[jInLoop][3] ) {
            const correctAnswer = 'correct'
            correctAnswers.push( correctAnswer )
          }
        }
      }

      if ( correctAnswers.length === this.props.settings.correctCombinations.length )
        window.location = C.ROUTES.RESULTS

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
