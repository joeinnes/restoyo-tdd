import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../src/components/Card.js';

describe('a card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
  });

  it('renders the title prop in a title styled p tag', () => {
    const data = {
      title: "Test"
    };
    const wrapper = shallow(<Card data={data} />);
    const test = <p className="title is-5">Test</p>;
    expect(wrapper.contains(test)).toEqual(true);
  });

  it('renders the description prop in a p tag', () => {
    const data = {
      description: "Test paragraph"
    };
    const wrapper = shallow(<Card data={data}/>);
    const test = <div className="content">Test paragraph</div>;
    expect(wrapper.contains(test)).toEqual(true);
  });

  it('renders a title and description if both are provided', () => {
    const data = {
      title: "Test",
      description: "Test paragraph"
    };
    const wrapper = shallow(<Card data={data} />);
    const test = <p className="title is-5">Test</p>;
    const test2 = <div className="content">Test paragraph</div>;
    expect(wrapper.contains(test)).toEqual(true) && expect(wrapper.contains(test2)).toEqual(true);
  });

  it('renders an image with the url provided', () => {
    const data = {
      image: "http://placehold.it/200x200"
    };
    const wrapper = shallow(<Card data={data} />);
    const test = <img src="http://placehold.it/200x200" />
    expect(wrapper.contains(test)).toEqual(true); 
  });

  it('can be found using the id passed to it', () => {
    const data = {
      id: "abc123"
    };
    const wrapper = shallow(<Card data={data} />);
    expect(wrapper.find('#abc123')).toBeTruthy(); 
  });
});