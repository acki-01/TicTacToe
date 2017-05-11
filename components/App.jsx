import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/Game.jsx';
require('../sass/style.scss');
class App extends React.Component {
  render() {
    return (
        <div className='container'>
          <div className="App">
          <Game/>
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
