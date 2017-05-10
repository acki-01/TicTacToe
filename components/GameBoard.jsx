import React from 'react';
import Square from './Square.jsx';

export default class GameBoard extends React.Component{
  render() {
    return <div>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
  }
}
