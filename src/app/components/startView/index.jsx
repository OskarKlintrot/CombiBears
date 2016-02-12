import React /* , { PropTypes }*/ from 'react'
import { Link } from 'react-router'
import SofaOptions from './sofaOptions'
import BearOptions from './bearOptions'
import InfoFlash from './infoFlash'

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

const numberOfSelectedSeats = 3

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
            <SofaOptions selected={ numberOfSelectedSeats } />
          </div>
        </div>
        <div className='medium-6 columns'>
          <div style={ styles.center }>
            <BearOptions />
          </div>
        </div>
        <div className='medium-12 columns'>
          <div style={ Object.assign({}, styles.center, styles.startButton ) }>
            <Link
              to={ '/start' }
            >
              <img
                id='StartButton'
                alt='StartButton'
                src='/public/pics/icons/start.png'
                height='50px'
                width='150px'
              ></img>
            </Link>
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

export default StartView
