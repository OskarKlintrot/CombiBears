import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import SofaOptions from './sofaOptions'
import BearOptions from './bearOptions'
import InfoFlash from './infoFlash'
import Option from './option'
import Actions from '../../redux/actions/'

const styles = {
  center: {
    textAlign: 'center'
  },
  logotype: {
    marginTop: '12px'
  },
  infoButton: {
    position: 'fixed',
    bottom: '70px',
    right: '70px'
  },
  startButton: {
    // position: 'relative',
    // bottom: '70px'
    // right: '50%'
  }
}

class StartView extends React.Component {
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

  /* ...or binding this here using an arrow function. I don't know if there
   * is a best practice or ESLint rules for this "issue". Note the
   * semicolon that must be on the end of a class property!
   */
  onOpenModal = () => {
    this.setState({ modalIsOpen: true })
  };

  onCloseModal() {
    this.setState({ modalIsOpen: false })
  }

  onModalCloseRequest() {
    // Opportunity to validate something and keep the
    // modal open even if it requested to be closed
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className='row'>
        <div className='medium-12 columns'>
          <div style={ styles.center }>
            <img
              className='medium-12 columns'
              style={ styles.logotype }
              id='Logotyp'
              alt='Logotyp'
              src='public/pics/logotype.png'
              width='600px'
            ></img>
          </div>
        </div>
        <div className='medium-6 columns'>
          <div style={ styles.center }>
            <Option>
              <SofaOptions
                selected={ this.props.numberOfSeats }
                handleIncreaseNumberOfSeats={
                  this.props.increaseNumberOfSeats
                }
                handleDecreaseNumberOfSeats={
                  this.props.decreaseNumberOfSeats
                }
              />
            </Option>
          </div>
        </div>
        <div className='medium-6 columns'>
          <div style={ styles.center }>
            <Option>
              <BearOptions />
            </Option>
          </div>
        </div>
        <div className='medium-12 columns'>
          <div style={ Object.assign({}, styles.center, styles.startButton ) }>
            { /* <Link
              to={ '/start' }
            > */ }
            <img
              id='StartButton'
              alt='StartButton'
              src='public/pics/icons/start.png'
              height='50px'
              width='150px'
              style={ { cursor: 'pointer' } }
              onClick={ () => this.props.startGame() }
            ></img>
            { /* </Link> */ }
          </div>
        </div>
        <div className='medium-12 columns'>
          <InfoFlash
            style={ styles.infoButton }
            handleOpenModal={ this.onOpenModal }
            handleCloseModal={ this.onCloseModal }
            handleModalCloseRequest={ this.onModalCloseRequest }
            open={ this.state.modalIsOpen }
          />
        </div>
      </div>
    )
  }
}

StartView.propTypes = {
  numberOfSeats: PropTypes.number.isRequired,
  increaseNumberOfSeats: PropTypes.func.isRequired,
  decreaseNumberOfSeats: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => state.settings

const mapDispatchToProps = ( dispatch ) => {
  return {
    increaseNumberOfSeats: () => {
      dispatch( Actions.increaseNumberOfSeats() )
    },
    decreaseNumberOfSeats: () => {
      dispatch( Actions.decreaseNumberOfSeats() )
    },
    startGame: () => {
      dispatch( Actions.startGame() )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StartView )
