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
      turn: "./images/angular.ico",
      winner: null,
      points:0
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
    winner: null,
    }
  )
}
  handleTurnChange(location){
    // console.log(this.props.boardPattern[0]);
    let updatedBoard=this.state.boardPattern.slice();
    updatedBoard[location]=this.state.turn;
    this.setState({boardPattern:updatedBoard})
    if (this.state.turn=='./images/angular.ico'){
      this.setState({turn:'./images/react.ico'})
    }
    else if(this.state.turn=='./images/react.ico'){
      this.setState({turn:'./images/angular.ico'})
    }
    let topRow=updatedBoard[0]+updatedBoard[1]+updatedBoard[2];
    if (topRow.match('./images/angular.ico./images/angular.ico./images/angular.ico')){
      this.setState({winner:this.state.turn});
      this.setState({points:this.state.points+1})
      console.log('działa');
      return;
    }
  }
  render() {
    return (
      <div>
        <RestartBtn restart={this.restartGame}/>
        <span>{this.state.points}</span>
        <div>
          {this.state.boardPattern.map(function(value, i){
            return <Square key={i} turn={this.state.boardPattern[i]} onTurnChange={()=>this.handleTurnChange(i)} location={i} value={value}/>
          }.bind(this))}
      </div>
      </div>
      )
    }
  }
