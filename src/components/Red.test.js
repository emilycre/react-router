import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red Component', () => {
  it('Renders Red', () => {
    const wrapper = shallow(<Red />);
    expect(wrapper).toMatchSnapshot();
  });
});
