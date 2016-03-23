import React, { PropTypes } from 'react'
import BasicSofa from '../shared/basicSofa'
import SavedPermutationsFlash from './savedPermutationsFlash'
import C from '../../constants'

const ALREADY_SAVED_ID = 'alreadySaved'
const LAST_SAVED_ID = 'lastSaved'
const LAST_SAVED_ANIMATION_CLASS = 'last-saved animated'
const SOFALIST_ID = 'sofaList'

class SavedPermutations extends React.Component {

  constructor( props ) {
    super( props )
    this.onCloseModal = this.onCloseModal.bind( this )
    this.onModalCloseRequest = this.onModalCloseRequest.bind( this )

    this.previousSavedPermutationsLength = 0

    this.state = {
      modalIsOpen: false
    }
  }

  componentDidUpdate() {

    this.scrollUpOnNewPermutation()

    this.scrollUpOnAlreadySaved()

    // Update previous length value
    this.previousSavedPermutationsLength = this.props.savedPermutations.length
  }

  scrollUpOnNewPermutation() {

    // After view has updated, and a permutations was added.
    if (
      this.props.savedPermutations.length > this.previousSavedPermutationsLength &&
      this.props.isPermutationSavedSinceRefresh
    )
    // Scroll to top in sofa list.
      document.getElementById( SOFALIST_ID ).scrollTop = 0
  }

  scrollUpOnAlreadySaved() {

    // Scrolls to game view 'already saved' element and sets styles on in.
    if ( document.getElementById( ALREADY_SAVED_ID ) !== null ) {
      const alreadySaved = document.getElementById( ALREADY_SAVED_ID )
      const topPos = alreadySaved.offsetTop
      document.getElementById( SOFALIST_ID ).scrollTop = topPos
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

  initDisableLastSavedAnimation() {

    const timeoutTime = 1100
    const timeoutFunction = () => {

      const lastSaved = document.getElementById( LAST_SAVED_ID )

      lastSaved.setAttribute( 'class', C.ALLOW_TOUCH_MOVE_CLASS )
    }

    setTimeout( timeoutFunction, timeoutTime )
  }

  render() {

    const styles = {
      savedPermutations: {
        width: '20%',
        height: this.props.height,
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0'
      },

      arrowDiv: {
        width: '17%',
        minHeight: '100%',
        float: 'left'
      },

      arrowButton: {
        width: '7%',
        cursor: 'pointer',
        position: 'fixed',
        top: '45%',
        zIndex: '10'
      },

      sofaList: {
        width: '83%',
        height: this.props.height,
        minHeight: '100%',
        overflow: 'auto',
        float: 'right',
        background: '#E0D8C7',
        border: 'solid',
        borderWidth: '0px',
        borderLeftWidth: '0.5em',
        borderColor: 'rgb(250, 250, 240)',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'scale3d(1, 1, 1)',
        transform: 'scale3d(1, 1, 1)'
      },

      ulSofas: {
        listStyleType: 'none',
        margin: 'auto',
        WebkitTransform: 'scale3d(1, 1, 1)',
        transform: 'scale3d(1, 1, 1)'
      },

      sofaListElementLast: {
        backgroundColor: '#59b585'
      },

      sofaListElementSaved: {
        backgroundColor: '#b93e3e',
        border: '10px solid #b93e3e',
        borderRadius: '5%'
      },

      sofaListElements: {
        padding: '30% 7% 6% 7%',
        height: '50%',
        backgroundImage: 'url(' + C.SRC_TO_IMAGES.PHOTO_BACKGROUND + ')',
        backgroundColor: '#ecedef',
        backgroundSize: 'contain',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: '5%',
        WebkitBoxShadow: '1px 1px 2px 0px rgba(161,161,161,1)',
        boxShadow: '1px 1px 2px 0px rgba(161,161,161,1)',

        WebkitTransform: 'scale3d(1, 1, 1)',
        transform: 'scale3d(1, 1, 1)'
      }
    }

    if ( this.props.savedPermutations.length > 0 ) {

      const renderSofa = ( bearsOnSofa, index ) => {
        let sofaListElementStyle = styles.sofaListElements
        let sofaLiId = ''
        let animationClassName = ''

        if ( index === 0 && this.props.triedToSaveDuplicatePermutationIndex < 0 ) {

          // Make sure if a new permutation has been added in game view
          if ( this.props.savedPermutations.length > this.previousSavedPermutationsLength && this.props.isPermutationSavedSinceRefresh ) {

            // Set values required for animation
            sofaLiId = LAST_SAVED_ID
            animationClassName = LAST_SAVED_ANIMATION_CLASS

            // Disable last saved animation after its done.
            this.initDisableLastSavedAnimation()
          }
        }

        if ( index === this.props.triedToSaveDuplicatePermutationIndex ) {
          sofaListElementStyle = Object.assign({}, styles.sofaListElements, styles.sofaListElementSaved )
          sofaLiId = ALREADY_SAVED_ID
        }
        return (
          <li
            className={ C.ALLOW_TOUCH_MOVE_CLASS + ' ' + animationClassName }
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
            id={ SOFALIST_ID }
            style={ styles.sofaList }
          >
            <ul
              style={ styles.ulSofas }
              className={ C.ALLOW_TOUCH_MOVE_CLASS }
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
  isPermutationSavedSinceRefresh: PropTypes.bool.isRequired,
  savedPermutations: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  triedToSaveDuplicatePermutationIndex: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default SavedPermutations
