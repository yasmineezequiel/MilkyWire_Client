import React from 'react';
import { shallow } from 'enzyme';
import PostsList from '../components/PostsList';

describe('<PostsList />', () => {
  it('displays posts list', () => {
    const describedComponent = shallow(<PostsList />);
    describedComponent.setState({posts: [{id: 1, title: "Ocean Cleaning", text: "Donate and make your impact"}]})
    const response = <h1>Ocean Cleaning</h1>
    console.warn(describedComponent.html())
    expect(describedComponent.contains(response)).toEqual(true)
  })
})