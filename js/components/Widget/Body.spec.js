import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Body from './Body';


describe('<Widget.Body />', () => {
  const mockedWidget = { body: 'test' };
  it('should have a component className', () => {
    const wrapper = shallow(<Body widget={mockedWidget} />);
    expect(wrapper.hasClass('widget-body')).to.eq(true);
  });
  it('should render props.widget.body', () => {
    const wrapper = shallow(<Body widget={mockedWidget} />);
    expect(wrapper.text()).to.eq(mockedWidget.body);
  });
});
