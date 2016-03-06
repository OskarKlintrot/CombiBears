import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
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

class FounList extends React.Component {

  constructor( props )
  {
    super ( props )
    this.handleClick = this.handleClick.bind ( this )
    this.state =
    {
      selectedIndex: <FoundPermutations savedPermutations={ this.props.game.savedPermutations } settings={ this.props.settings }/>,
      button: <div style={ styles.iconSolution }> <button onClick = { this.handleClick } ><img src={ C.SRC_TO_IMAGES.ICONS.SHOW_SOLUTION } alt='Icon for new sofa' style={ styles.icon } /></button> </div>
    }

  }

  handleClick()
  {
    this.setState({ selectedIndex: <ShowAllPremutations savedPermutations={ this.props.game.savedPermutations } settings={ this.props.settings }/>, button: <p> </p> })
  }

  render()
  {

    return (
      <div>
        { this.state.button }
        { this.state.selectedIndex }
        <div id = 'position_of_button'>

        </div>
      </div> )
  }
}

const mapStateToProps = ( state ) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

export default connect( mapStateToProps )( FounList )