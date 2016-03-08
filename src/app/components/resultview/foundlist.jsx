import React from 'react'
import C from '../../constants'
import FoundPermutations from './foundPermutations'
import ShowAllPremutations from './showAll'

const styles = {

  icon: {
    height: '100px'
  },

  iconRight: {
    height: '100px',
    float: 'right',
    cursor: 'pointer'
  },

  arrowDiv: {
    position: 'fixed',
    right: '0',
    top: '50%',
    marginTop: '-50px'
  },

  iconRestart: {
    bottom: '0',
    right: '0',
    position: 'fixed',
    height: '80px',
    cursor: 'pointer'
  },
  iconReturn: {
    position: 'absolute',
    marginTop: '200px'
  },
  iconSolution: {
    position: 'fixed',
    margin: '60px 0px 0px 511px'
  }
}

class FoundList extends React.Component {
  constructor( props ) {
    super( props )
    this.handleClick = this.handleClick.bind( this )
    this.state = { showSolutions: false }
  }

  handleClick() {
    this.setState({ showSolutions: true })
  }

  render() {
    return (
      <div>
        <div style={ styles.iconSolution }>
          <img
            src={ C.SRC_TO_IMAGES.ICONS.SHOW_SOLUTION }
            draggable='false'
            alt='Icon for new sofa'
            style={ styles.icon }
            onClick={ this.handleClick }
            hidden={ this.state.showSolutions }
          />
        </div>

        <div hidden={ this.state.showSolutions }>
          <FoundPermutations
            savedPermutations={ this.props.game.savedPermutations }
            settings={ this.props.settings }
          />
        </div>

        <div hidden={ !this.state.showSolutions }>
          <ShowAllPremutations
            savedPermutations={ this.props.game.savedPermutations }
            settings={ this.props.settings }
          />
        </div>
      </div>
    )
  }
}

export default FoundList
