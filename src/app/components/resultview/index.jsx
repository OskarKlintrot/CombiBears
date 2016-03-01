import React from 'react'
//import ReactDom from 'react-dom';
import ResultList from './resultlist/resultlist'
import Links from './links/links'
import FoundList from './found/foundlist'
// ett objek
// let contacts ={ name:'Edwin', telf:'0706880589'}

// en  array
/* let contacts =[{ id: 1, name:'Edwin', telf:'0706880589'},
    { id: 2, name:'Marco', telf:'0704564646'},
    { id: 3, name:'Jesus', telf:'076456456'},
    { id: 4, name:'Juna', telf:'07787676786'}]; */

/*let NumberOfBearsFound = [{ id: 1, name: 'Edwin', found: 1, answer: 1 },
        { id: 2, name: 'Marco', found: 1, answer: 2 }, { id: 3, name: 'Jesus', found: 1, answer: 3 },
        { id: 4, name: 'Juna', found: 0, answer: 4 }, { id: 5, name: 'Juna', found: 1, answer: 5 },
        { id: 6, name: 'Juna', found: 0, answer: 6 }, { id: 7, name: 'Juna', found: 1, answer: 7 },
        { id: 8, name: 'Juna', found: 0, answer: 8 }, { id: 9, name: 'Juna', found: 0, answer: 9 }]

    // <List contacts={contacts}/>
let CorrectAnswers = [{ id: 1, name: 'Edwin', found: 1, answer: 1 },
        { id: 2, name: 'Marco', found: 1, answer: 2 }, { id: 3, name: 'Jesus', found: 1, answer: 3 },
        { id: 4, name: 'Juna', found: 1, answer: 4 }, { id: 5, name: 'Juna', found: 1, answer: 5 },
        { id: 6, name: 'Juna', found: 1, answer: 6 }, { id: 7, name: 'Juna', found: 1, answer: 7 },
        { id: 8, name: 'Juna', found: 1, answer: 8 }, { id: 9, name: 'Juna', found: 1, answer: 9 }]*/

export default class resultview extends React.Component {

    getAnswers( )
    {

      return ( [{ id: 1, name: 'Edwin', found: 1, answer: 1 },
            { id: 2, name: 'Marco', found: 1, answer: 2 }, { id: 3, name: 'Jesus', found: 1, answer: 3 },
            { id: 4, name: 'Juna', found: 1, answer: 4 }, { id: 5, name: 'Juna', found: 1, answer: 5 },
            { id: 6, name: 'Juna', found: 1, answer: 6 }, { id: 7, name: 'Juna', found: 1, answer: 7 },
            { id: 8, name: 'Juna', found: 1, answer: 8 }, { id: 9, name: 'Juna', found: 1, answer: 9 }] )


    }

    getBearsFound( )
    {

      return ( [{ id: 1, name: 'Edwin', found: 1, answer: 1 },
            { id: 2, name: 'Marco', found: 1, answer: 2 }, { id: 3, name: 'Jesus', found: 1, answer: 3 },
            { id: 4, name: 'Juna', found: 0, answer: 4 }, { id: 5, name: 'Juna', found: 1, answer: 5 },
            { id: 6, name: 'Juna', found: 0, answer: 6 }, { id: 7, name: 'Juna', found: 1, answer: 7 },
            { id: 8, name: 'Juna', found: 0, answer: 8 }, { id: 9, name: 'Juna', found: 0, answer: 9 }] )


    }


  render()
  {
    let NumberOfBearsFound =  this.getBearsFound()
    let CorrectAnswers = this.getAnswers()
    return (
      <div>
        <Links />
        <ResultList NumberOfBearsFound = { NumberOfBearsFound } />
        <FoundList NumberOfBearsFound = { NumberOfBearsFound } CorrectAnswers = { CorrectAnswers } />
      </div>
        )
  }
}
