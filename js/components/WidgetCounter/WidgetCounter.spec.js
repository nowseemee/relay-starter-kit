import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WidgetCounter from './WidgetCounter';

describe('<WidgetCounter />', () => {
  const props = { viewer: { widgetsCount: 1337 } };
  it('should have a component className', () => {
    const wrapper = shallow(<WidgetCounter {...props}  />);
    expect(wrapper.hasClass('rsk-widget-counter')).to.eq(true);
  });
  it(`should render: ${props.viewer.widgetsCount} items`, () => {
    const wrapper = shallow(<WidgetCounter {...props} />);
    expect(wrapper.text()).to.eq(`${props.viewer.widgetsCount} items`);
  });
});
