import React from 'react'

export default class Square extends React.Component{
  handleTurnChange(props) {
      if ( typeof this.props.onTurnChange === 'function'){
          props.onTurnChange(props.location, props.turn);
      }
  };
  render(){
    return <div className='Square' onClick={()=>this.handleTurnChange(this.props)}>
      <img  className='unselectable' src={this.props.turn}></img>
    </div>
  }
}
