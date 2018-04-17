import React from 'React';
import { shallow } from 'enzyme';

import { Rating } from './RatingWithHoc';

describe('RatingsWithHoc', () => {
  it('should show not show reviewer if open is false', () => {
    const rating = {
      id: 'foo',
      reviewer: 'Bill',
      stars: 5
    }
    const wrapper = shallow(
      <Rating
        rating={rating}
        handleClick={() => {}}
        open={false}
      />
    )

    expect(wrapper).toMatchSnapshot();
  })

  it('should show show reviewer if open is true', () => {
    const rating = {
      id: 'foo',
      reviewer: 'Bill',
      rating: 5
    }
    const wrapper = shallow(
      <Rating
        rating={rating}
        handleClick={() => {}}
        open
      />
    )

    expect(wrapper).toMatchSnapshot();
  })

})
