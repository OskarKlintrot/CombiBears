import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Actions from '../redux/actions/'

class Main extends React.Component {
  render() {
    const { user, reset, setUser } = this.props
    const placeholder = "Enter your name here..."

    return (
      <div>
        <h2>Hello { user }!</h2>
        <form onSubmit={ ( ev ) => {
          return ev.preventDefault
        } }
        >
          <label htmlFor='userInput'>Username: </label>
          <input id='userInput' type='text' placeholder={ placeholder }
            ref={ ( userInput ) => {
              this.userInput = userInput
            } }
            autoFocus
            autoComplete='off'
          />
          <button type='submit' onClick={ () => {
            setUser( this.userInput.value )
            this.userInput.value = ''
          } }
          >Update user</button>
          <button type='reset' onClick={ () => {
            this.userInput.placeholder = "Notice the delay..."
            reset()
          } }
          >Reset user</button>
        </form>
        <p>
          <Link to={ '/about' }>Read more about this boilerplate...</Link>
        </p>
      </div>
    )
  }
}

Main.propTypes = {
  user: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => {
  return { user: state.app.user }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    reset: () => {
      dispatch( Actions.resetApp() )
    },
    setUser: ( user ) => {
      dispatch( Actions.setUser( user ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Main )
