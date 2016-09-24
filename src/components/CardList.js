import React, { Component } from 'react';
import Card from './Card.js';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'loading': true
    };
  }

  getLocation() {
    var _that = this;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(pos) {
        let latitude  = pos.coords.latitude;
        let longitude = pos.coords.longitude;
        _that.setState({
          location: {
            lat: latitude,
            long: longitude
          },
          loading: false
        });
      }, function(err) {
        console.log(err);
        _that.setState({
          location: 'Budapest, Hungary',
          loading: false
        });
      });
    } else {
      _that.setState({
        location: 'Budapest, Hungary',
        loading: false
      });
    }
  }

  buildList() {
    if (this.state.loading) {
      return (
        <h2>Loading...</h2>
      )
    }

    let list = [""];
    return list.map((data, index) => {
      return <Card data={data} key={index} />
    });
  }

  componentDidMount() {
    this.getLocation();
    let url = 'https://api.github.com/repos/visionmedia/superagent';
    var _that = this;
    request
      .get(url)
      .end(function(err, res){
        if (err) {
          _that.setState({
            error: true
          })
        }
        _that.setState({
          data: res
        })
      });
  }

  render() {
    if (this.state.error) {
      return <p>Error loading data...</p>
    }

    let list = this.buildList();
    return <div>{ list }</div>
  }
}

export default App;
