import React from 'react'

import BoxInfo from './boxinfo'

import BoxInfo2 from './boxinfoCorrectAnswers'

export default class ResultList extends React.Component {

  constructor( props )
  {
    super ( props )

    this.handleClick = this.handleClick.bind ( this )

    this.state =
    {
      selectedIndex: <BoxInfo NumberOfBearsFound = { this.props.NumberOfBearsFound } />,
      button: <button onClick = { this.handleClick } >Visa Lösning</button>
    }


  }


  handleClick()
  {
    this.setState({ selectedIndex: <BoxInfo2 CorrectAnswers = { this.props.CorrectAnswers } />, button: <p> </p> })
  }

  render()
  {
        // console.log(this.props.contacts);
        // visar listan
    return (
      <div> <h1>Result View</h1>
      { this.state.selectedIndex }
        <div id = 'position_of_button'>
      { this.state.button }
        </div>
      </div> )
  }
}

