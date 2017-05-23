import React from 'react'

export default class Square extends React.Component{
  handleTurnChange(props) {
      if ( typeof this.props.onTurnChange === 'function'){
          props.onTurnChange(props.location, props.turn);
      }
  };
  render(){
    console.log(this.props);
    let addClass;
    if (this.props.turn=='./images/react.ico'){
      addClass='react-animation';
    }
    if (this.props.turn==" ") {
      addClass="hidden"
    }
    return <div className='Square' onClick={()=>this.handleTurnChange(this.props)}>
      <img  className={'unselectable' + ' '+ addClass} src={this.props.turn}></img>
    </div>
  }
}
