import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WidgetList from './WidgetList';

describe('<WidgetList />', () => {
  const props = { viewer: { widgets: { edges: [] }} };
  it('should have a prefixed component className', () => {
    const wrapper = shallow(<WidgetList {...props} />);
    expect(wrapper.hasClass('rsk-widget-list')).to.eq(true);
  });
});
