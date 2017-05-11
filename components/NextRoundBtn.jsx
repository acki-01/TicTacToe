import React from 'react'

export default class NextRoundBtn extends React.Component{
  nextRound = e => {
      if ( typeof this.props.nextRound === 'function'){
          this.props.nextRound();
      }
  };
  render(){
    return <button className='RestartBtn' onClick={this.props.nextRound}>NEXT ROUND</button>
  }
}
