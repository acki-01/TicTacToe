import React from 'react'

export default class Square extends React.Component{
  handleTurnChange = e => {
      if ( typeof this.props.handleTurnChange === 'function'){
          this.props.handleTurnChange();
      }
  };
  render(){
    return <div className='Square' onClick={()=>{this.handleTurnChange}}>
      <img src={this.props.turn}></img>
    </div>
  }
}
