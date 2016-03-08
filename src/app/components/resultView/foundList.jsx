import React from 'react'
import FoundPermutations from './foundPermutations'
import ShowAllPremutations from './showAll'

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
