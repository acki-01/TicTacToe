import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from '../components/GameBoard.jsx'
require('../sass/style.scss');
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GameBoard/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
