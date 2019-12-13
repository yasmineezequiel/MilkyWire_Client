import React from 'react';
import { shallow } from 'enzyme';

describe('<ListPosts />', () => {
  it('display list of posts', () => {
    const describedComponent = shallow(<ListPosts />);
    describedComponent.setState({posts: [{id: 1, title: "Ocean Cleaning", text: "Donate and make your impact"}]})
    const response = <h1>Ocean Cleaning</h1>
    console.warn(describedComponent.html())
    expect(describedComponent.contains(response)).toEqual(true)
  })
})
