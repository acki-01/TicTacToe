import React from 'react';
import Square from './Square.jsx';
import NextRoundBtn from './NextRoundBtn.jsx';
import NewGameBtn from './NewGameBtn.jsx';
import Info from '../components/Info.jsx';
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
      pointsAngular:0,
      pointsReact:0,
      squareStripe:null
    }
  }

  nextRound=()=>{
  this.setState({
    boardPattern:[
      ' ',' ',' ',
      ' ',' ',' ',
      ' ',' ',' '
    ],
    turn: "./images/angular.ico",
    winner: null,
    }
  )
}
newGame=()=>{
this.setState({
  boardPattern:[
    ' ',' ',' ',
    ' ',' ',' ',
    ' ',' ',' '
  ],
  turn: "./images/angular.ico",
  winner: null,
  pointsAngular: 0,
  pointsReact: 0
  }
)
}
  handleTurnChange(location){
    //updaingBoard
    let updatedBoard=updatedBoard=this.state.boardPattern.slice();
    updatedBoard[location]=this.state.turn;
    this.setState({boardPattern:updatedBoard});
    const angular='./images/angular.ico';
    const react='./images/react.ico';
    const angularPattern='./images/angular.ico./images/angular.ico./images/angular.ico';
    const reactPattern='./images/react.ico./images/react.ico./images/react.ico';
    const topRow=updatedBoard[0]+updatedBoard[1]+updatedBoard[2];
    const midRow=updatedBoard[3]+updatedBoard[4]+updatedBoard[5];
    const bottomRow=updatedBoard[6]+updatedBoard[7]+updatedBoard[8];
    const leftCol=updatedBoard[0]+updatedBoard[3]+updatedBoard[6];
    const midCol=updatedBoard[1]+updatedBoard[4]+updatedBoard[7];
    const rightCol=updatedBoard[2]+updatedBoard[5]+updatedBoard[8];
    const rightCross=updatedBoard[0]+updatedBoard[4]+updatedBoard[8];
    const leftCross=updatedBoard[2]+updatedBoard[4]+updatedBoard[6];
    //checking if winner exist and block next move
    if (this.state.winner!==null){
      return;
    }
    //blocking changing icon in div
    if(this.state.boardPattern[location]==angular || this.state.boardPattern[location]==react){
      return;
    }
    //togglePlayer
    if (this.state.turn==angular){
      this.setState({turn:react})
    }
    else if(this.state.turn==react){
      this.setState({turn:angular})
    }
    //ANGULAR
    //check win rows
    if (topRow.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    if (midRow.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    if (bottomRow.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    //check win cols
    if (leftCol.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    if (midCol.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    if (rightCol.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    //check win crosses
    if (rightCross.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    if (leftCross.match(angularPattern)){
      this.setState({winner:'Angular', pointsAngular:this.state.pointsAngular+1});
      return;
    }
    //REACT
    //check win rows
    if (topRow.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    if (midRow.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    if (bottomRow.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    //check win cols
    if (leftCol.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    if (midCol.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    if (rightCol.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    //check win crosses
    if (rightCross.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    if (leftCross.match(reactPattern)){
      this.setState({winner:'React', pointsReact:this.state.pointsReact+1});
      return;
    }
    //check if draw
    if(updatedBoard.indexOf(' ')==-1){
      this.setState({winner:'Draw '})
    }
  }
  render() {
    let angularPointsInfo;
    if (this.state.pointsAngular>this.state.pointsReact){
      angularPointsInfo=<p className='angularWinning angularPoints letter-changer'>Angular: {this.state.pointsAngular}</p>
    } else {
      angularPointsInfo=<p className="angularPoints letter-changer">Angular: {this.state.pointsAngular}</p>
    }
    let reactPointsInfo;
    if (this.state.pointsReact>this.state.pointsAngular){
      reactPointsInfo=<p className='reactWinning'>React: {this.state.pointsReact}</p>
    } else {
      reactPointsInfo=<p>React: {this.state.pointsReact}</p>
    }
    return (
      <div className="Game">
        <div className="allInfo">
          <div className="buttons">
            <NewGameBtn new={this.newGame}/>
            <br/>
            <NextRoundBtn nextRound={this.nextRound}/>
          </div>
          <Info winner={this.state.winner}/>
        <div className="scoreBoard">
          {reactPointsInfo}
          {angularPointsInfo}
        </div>
      </div>
        <div className="gameBoard">
          {this.state.boardPattern.map(function(value, i){
            return <Square key={i} turn={this.state.boardPattern[i]} onTurnChange={()=>this.handleTurnChange(i)} location={i} value={value}/>
          }.bind(this))}
      </div>
      </div>
      )
    }
  }
