import React from 'react';
import ReactDOM from 'react-dom';
import CardList from '../src/components/CardList.js';
import Card from '../src/components/Card.js';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

describe('a list of cards', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardList />, div);
  });

  it('renders as many cards as array elements', () => {
    const list = ["", "", ""];
    const wrapper = shallow(<CardList list={list} />);
    expect(wrapper.find(Card)).to.have.length(3);
  });
});
