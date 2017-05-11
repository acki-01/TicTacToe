import React from 'react';

export default class Info extends React.Component{
  render(){
    return <div className='Info'>
          <h3>TIC-TAC-TOE</h3>
          <h5>{this.props.winner}</h5>
    </div>
  }
}
