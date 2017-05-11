import React from 'react'

export default class NewGameBtn extends React.Component{
  newGame = e => {
      if ( typeof this.props.new === 'function'){
          this.props.new();
      }
  };
  render(){
    return <button className='NewGameBtn' onClick={this.props.new}>NEW GAME</button>
  }
}
