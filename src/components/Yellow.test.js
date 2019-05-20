import React from 'react';
import { shallow } from 'enzyme';
import Yellow from './Yellow';

describe('Yellow Component', () => {
  it('Renders Yellow', () => {
    const wrapper = shallow(<Yellow />);
    expect(wrapper).toMatchSnapshot();
  });
});
