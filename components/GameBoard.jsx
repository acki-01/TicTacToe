import React from 'react';
import Square from './Square.jsx';

export default class GameBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      boardPattern:[
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ]
    }
  }
  render() {
    return (
      <div className='container'>
        {this.state.boardPattern.map(function(value, i){
          return <Square key={i}/>
    })}
  </div>
    )
  }
}
