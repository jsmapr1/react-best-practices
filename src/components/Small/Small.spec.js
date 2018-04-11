import React from 'react';
import { shallow } from 'enzyme';

import Small from './Small';

describe('Small', () => {
  it('should render Small', () => {
    const wrapper = shallow(
      <Small />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
