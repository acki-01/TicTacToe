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
  handleTurnChange = (i) => {
    if (this.state.turn===""){
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
      <br/>
        {this.state.boardPattern.map(function(value, i){
          return <Square key={i} turn={this.state.turn} onTurnChange={()=>this.handleTurnChange(i)}/>
        }.bind(this))}
      </div>
      )
    }
  }
