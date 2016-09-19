import React, { Component } from 'react';
import Card from './Card.js';

class App extends Component {
  buildList() {
    if (!this.props.list || this.props.list === "" || !Array.isArray(this.props.list) || this.props.list.length === 0 ) {
      return (
        <p></p>
      )
    }
    
    let list = this.props.list;
    return list.map((data, index) => {
      return <Card data={data} key={index} />
    });
  }

  render() {
    let list = this.buildList();
    return <div>{ list }</div>
  }
}

export default App;
