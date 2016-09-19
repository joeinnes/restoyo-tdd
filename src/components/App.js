import React, { Component } from 'react';
import '../assets/App.css';
import Card from '../components/Card.js';
import '../../node_modules/bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column is-narrow-desktop main-column">
              <Card title="Test" image="http://placehold.it/500x500" description="A test description" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
