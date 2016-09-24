import React, { Component } from 'react';
import '../assets/App.css';
import CardList from '../components/CardList.js';
import '../../node_modules/bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column is-narrow-desktop main-column">
              <CardList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
