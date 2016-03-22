import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import C from '../../constants'
import SofaOptions from './sofaOptions'
import BearOptions from './bearOptions'
import InfoFlash from './infoFlash'
import Option from './option'
import Actions from '../../redux/actions/'

@Radium
class StartView extends React.Component {
  constructor( props ) {
    super( props )

    /* One way of using this.setState() when using ES2015 classes
     * is to either bind this here in the constructor...
     */
    this.onCloseModal = this.onCloseModal.bind( this )
    this.onModalCloseRequest = this.onModalCloseRequest.bind( this )
    this.state = {
      modalIsOpen: false,
      windowHeight: window.innerHeight
    }

    // Apply background filters
    document.getElementById( 'backgroundImage' ).setAttribute( 'style', '-webkit-filter: ' + C.BG_FILTER )
  }

  componentDidMount() {
    // Bind 'this' to passed methods
    this.boundHandleOrientationChange = this.handleOrientationChange.bind( this )

    // When orientation is changed between landscape and portrait mode.
    window.addEventListener( 'orientationchange', this.boundHandleOrientationChange, false )
    window.addEventListener( 'resize', this.boundHandleOrientationChange, false )
  }

  componentWillUnmount() {
    window.removeEventListener( 'orientationchange', this.boundHandleOrientationChange )
    window.removeEventListener( 'resize', this.boundHandleOrientationChange )
  }

  handleOrientationChange() {
    this.setState({
      windowHeight: window.innerHeight
    })
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

    const styles = {
      center: {
        textAlign: 'center'
      },
      logotype: {
        marginTop: '2%',
        marginBottom: '-5%',
        width: '35%',
        '@media (max-width: 40em)': {
          marginBottom: '0'
        }
      },
      startButton: {
        position: 'relative',
        bottom: '70px',
        width: '145px',
        '@media (max-width: 40em)': {
          width: '120px'
        },
        cursor: 'pointer'
      },
      startView: {
        height: this.state.windowHeight + 'px'
      },
      backToGame: {
        position: 'fixed',
        height: '100px',
        top: '20px',
        right: '20px',
        cursor: 'pointer',
        '@media (max-width: 40em)': {
          position: 'absolute',
          top: '8px',
          right: '25px',
          height: '80px',
          margin: '1em auto'
        }
      }
    }

    return (
      <div
        className='startView'
        style={ styles.startView }
      >
        <div className='row'>
          <div className='medium-12 columns'>
            <div style={ styles.center }>
              <img
                className='medium-12 columns'
                style={ styles.logotype }
                id='Logotyp'
                alt='Logotyp'
                src={ C.SRC_TO_IMAGES.LOGOTYPE }
                draggable='false'
              ></img>
            </div>
          </div>
        </div>
        <div>
          <img
            id='BackToGame'
            alt='BackToGame'
            src={ C.SRC_TO_IMAGES.ICONS.ARROW_RIGHT }
            onClick={ () => {
              this.props.backToGame()
            } }
            style={ styles.backToGame }
            draggable='false'
            hidden={ Object.keys( this.props.lastSettings ).length === 0 }
          ></img>
        </div>
        <div className='row'>
          <div className='small-12 medium-5 medium-offset-1 large-6 large-offset-0 columns'>
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
                  bounceSofaAnimation1={ this.props.bounceSofaAnimation1 }
                />
              </Option>
            </div>
          </div>
          <div className='small-12 medium-5 medium-offset-0 large-6 large-offset-0 columns'>
            <div style={ styles.center }>
              <Option>
                <BearOptions
                  bears={ this.props.bears }
                  updateBear={ this.props.updateBear }
                  numberOfBearsToDisplay={ this.props.numberOfBears }
                  handleIncreaseNumberOfBears={
                    this.props.increaseNumberOfBears
                  }
                  handleDecreaseNumberOfBears={
                    this.props.decreaseNumberOfBears
                  }
                  bounceBears={ this.props.bounceBears }
                  bounceBearsAnimation1={ this.props.bounceBearsAnimation1 }
                />
              </Option>
            </div>
          </div>
        </div>
        <div style={ styles.center }>
          <img
            id='StartButton'
            alt='StartButton'
            src={ C.SRC_TO_IMAGES.ICONS.START }
            onClick={ () => {
              this.props.startGame()
              this.props.resetGame()
              this.props.initBears()
              this.props.initSofa()
            } }
            style={ styles.startButton }
            draggable='false'
          ></img>
        </div>
        <div>
          <InfoFlash
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
  numberOfBears: PropTypes.number.isRequired,
  bears: PropTypes.object.isRequired,
  increaseNumberOfSeats: PropTypes.func.isRequired,
  decreaseNumberOfSeats: PropTypes.func.isRequired,
  increaseNumberOfBears: PropTypes.func.isRequired,
  decreaseNumberOfBears: PropTypes.func.isRequired,
  updateBear: PropTypes.func.isRequired,
  bounceBears: PropTypes.bool.isRequired,
  bounceBearsAnimation1: PropTypes.bool.isRequired,
  bounceSofaAnimation1: PropTypes.bool.isRequired,
  lastSettings: PropTypes.object.isRequired,
  backToGame: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => state.settings

const mapDispatchToProps = ( dispatch ) => {
  return {
    resetGame: () => {
      dispatch( Actions.resetGame() )
    },
    increaseNumberOfSeats: () => {
      dispatch( Actions.increaseNumberOfSeats() )
    },
    decreaseNumberOfSeats: () => {
      dispatch( Actions.decreaseNumberOfSeats() )
    },
    increaseNumberOfBears: () => {
      dispatch( Actions.increaseNumberOfBears() )
    },
    decreaseNumberOfBears: () => {
      dispatch( Actions.decreaseNumberOfBears() )
    },
    updateBear: ( bear ) => {
      dispatch( Actions.updateBear( bear ) )
    },
    startGame: () => {
      dispatch( Actions.startGame() )
    },
    initBears: () => {
      dispatch( Actions.initBears() )
    },
    initSofa: () => {
      dispatch( Actions.initSofa() )
    },
    backToGame: () => {
      dispatch( Actions.backToGame() )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StartView )
