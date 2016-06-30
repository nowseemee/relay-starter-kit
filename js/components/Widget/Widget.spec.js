import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Widget from './Widget';

import Body from './Body';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';
import Avatar from './Avatar';
import TimeStamp from './TimeStamp';

describe('<Widget />', () => {
  it('should have a component className', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper.hasClass('rsk-widget')).to.eq(true);
  });
  it('should have all required sub elements for widget-row', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper.containsAllMatchingElements([
      <Avatar />,
      <Body />,
      <EditBtn />,
      <DeleteBtn />
    ])).to.eq(true);
    
  });
  it('should have the TimeStamp element', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper.containsAllMatchingElements([
      <TimeStamp />
    ])).to.eq(true);
  });
});
