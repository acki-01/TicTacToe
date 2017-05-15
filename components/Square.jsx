import React from 'react'

export default class Square extends React.Component{
  handleTurnChange(props) {
      if ( typeof this.props.onTurnChange === 'function'){
          props.onTurnChange(props.location, props.turn);
      }
  };
  render(){
    let AnimClass;
    if (this.props.turn=='./images/react.ico'){
      AnimClass='react-animation';
    }
    return <div className='Square' onClick={()=>this.handleTurnChange(this.props)}>
      <img  className={'unselectable' + ' '+ AnimClass} src={this.props.turn}></img>
    </div>
  }
}
