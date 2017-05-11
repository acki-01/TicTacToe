import React from 'react';
import Square from './Square.jsx';
import RestartBtn from './RestartBtn.jsx'
export default class GameBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      boardPattern:[
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ],
      turn: "",
      winner: null
    }
  }

  restartGame=()=>{
  this.setState({
    boardPattern:[
      ' ',' ',' ',
      ' ',' ',' ',
      ' ',' ',' '
    ],
    turn: "",
    winner: null
    }
  )
}
  handleTurnChange(location){
    let updatedBoard=this.state.boardPattern.slice();
    updatedBoard[location]=this.state.turn;
    this.setState({boardPattern:updatedBoard})
    if (this.state.turn==""){
      this.setState({turn:'./images/angular.ico'})
    }
    else if (this.state.turn=='./images/angular.ico'){
      this.setState({turn:'./images/react.ico'})
    }
    else if(this.state.turn=='./images/react.ico'){
      this.setState({turn:'./images/angular.ico'})
    }
  }
  render() {
    return (
      <div>
        <RestartBtn restart={this.restartGame}/>
        <div>
          {this.state.boardPattern.map(function(value, i){
            return <Square key={i} turn={this.state.boardPattern[i]} onTurnChange={this.handleTurnChange.bind(this, i)} location={i} value={value}/>
          }.bind(this))}
      </div>
      </div>
      )
    }
  }
