import React from 'react'

export default class RestartBtn extends React.Component{
  restartGame = e => {
      if ( typeof this.props.onTurnChange === 'function'){
          this.props.restart();
      }
  };
  render(){
    return <button className='RestartBtn' onClick={this.props.restart}>RESTART GAME</button>
  }
}
