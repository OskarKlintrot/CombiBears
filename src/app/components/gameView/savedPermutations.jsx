import React, { PropTypes } from 'react'
import C from '../../constants'
import BasicSofa from '../shared/basicSofa-v2'
import SavedPermutationsFlash from './savedPermutationsFlash'

const styles = {
  savedPermutations: {
    width: '20%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'right'
  },

  arrowDiv: {
    width: '17%',
    height: window.innerHeight + 'px',
    overflow: 'auto',
    float: 'left'
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
  },

  sofaListElementLast: {
    // transform: 'scale(1.1, 1.1)',
    backgroundColor: '#59b585',
    borderRadius: '10px',
    paddingTop: '15px'
  },

  sofaListElementSaved: {
    // transform: 'scale(1.1, 1.1)',
    backgroundColor: '#b93e3e',
    borderRadius: '10px',
    paddingTop: '15px'
  },

  sofaListElements: {

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
        console.log( 'Alla permutationer hittade' )

      const renderSofa = ( bearsOnSofa, index ) => {
        let sofaListElementStyle = styles.sofaListElements
        let sofaLiId = ''
        // TODO: Ändra till property som kommer in från index
        if ( index === 3 ) {
          sofaListElementStyle = styles.sofaListElementSaved
          sofaLiId = 'alreadySaved'
        } else if ( index === 0 ) {
          sofaListElementStyle = styles.sofaListElementLast
        }
        return (
          <li
            key={ index }
            style={ sofaListElementStyle }
            id={ sofaLiId }
          >
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
          <div
            id={ 'sofaList' }
            style={ styles.sofaList }
          >
            <ul
              style={ styles.ulSofas }
            >
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
        <div style={ styles.sofaList }>
        </div>
      </div>
    )
  }
}

SavedPermutations.propTypes = {
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
}

export default SavedPermutations
