import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import DeleteBtn from './DeleteBtn';


describe('<Widget.DeleteBtn />', () => {
  it('should have a component className', () => {
    const wrapper = shallow(<DeleteBtn />);
    expect(wrapper.hasClass('fa-trash-o')).to.eq(true);
  });

  it('should call handleDeleteBtnClick on click', () => {
    const handleClick = spy();
    const wrapper = shallow(<DeleteBtn handleDeleteBtnClick={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick.calledOnce).to.eq(true);
  });
});

