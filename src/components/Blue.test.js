import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('Blue Component', () => {
  it('Renders Blue', () => {
    const wrapper = shallow(<Blue />);
    expect(wrapper).toMatchSnapshot();
  });
});
