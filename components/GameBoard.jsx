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
      ],
      turn: ""
    }
  }
  handleTurnChange = () => {
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
        {this.state.boardPattern.map(function(value, i){
          return <Square key={i} turn={this.state.turn} handleTurnChange={this.handleTurnChange}/>
        }.bind(this))}
      </div>
      )
    }
  }
