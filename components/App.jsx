import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from '../components/GameBoard.jsx'
import Info from '../components/Info.jsx'
require('../sass/style.scss');
class App extends React.Component {
  render() {
    return (
        <div className='container'>
          <div className="App">
          <Info/>
          <GameBoard/>
          </div>
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
