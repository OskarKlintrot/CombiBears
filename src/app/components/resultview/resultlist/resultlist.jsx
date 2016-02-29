import React from 'react'

import BoxInfo from './boxinfo'

export default class ResultList extends React.Component {
  render() {
        // console.log(this.props.contacts);
        // visar listan
    return (
      <div>
        <br/>
        <h1>Result list</h1>
        <BoxInfo NumberOfBearsFound = { this.props.NumberOfBearsFound } />
      </div> ) }
}
