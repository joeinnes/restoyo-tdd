import React from 'react';
import ReactDOM from 'react-dom';
import CardList from '../CardList.js';
import Card from '../Card.js';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import nock from 'nock';
import SampleVenues from '../../../sample/venues.js'

describe('a list of cards', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardList />, div);
  });

  it('has an initial state propery of loading', () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper.state('loading')).to.be.true;
  });

  it('renders loading text if no data is available in the initial run', () => {
    const wrapper = shallow(<CardList />);
    const loading = <h2>Loading...</h2>
    expect(wrapper.contains(loading)).to.be.ok;
  });

  it('fetches user location', () => {
    const wrapper = mount(<CardList />);
    expect(wrapper.state('location')).to.be.ok;
  });

  it('fetches data from Foursquare', () => {
    const wrapper = mount(<CardList />);
    setTimeout(function() {
      expect(wrapper.state('data')).to.exist
    }, 5000);
  });

  it('handles errors from API', () => {
    const wrapper = mount(<CardList />);
    nock('https://api.foursquare.com')
      .get('v2/venues/search')
      .reply(500, {
        response: "Internal Server Error"
      });
    setTimeout(function() {
      expect(wrapper.contains('Error loading data...')).to.be.true;
    }, 5000);
  });

  it('doesn\'t automatically assume a response is an error', (done) => {
    const wrapper = mount(<CardList />);
    nock('https://api.foursquare.com')
      .get('v2/venues/search')
      .reply(200, {
        response: "All OK!"
      });
    setTimeout(function() {
      expect(wrapper.contains('Error loading data...')).to.be.false;
      nock.cleanAll();
      done();
    }, 1000);
  });
});