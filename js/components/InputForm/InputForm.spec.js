import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, stub } from 'sinon';
import InputForm from './InputForm';

describe('<InputForm />', () => {
  it('should have a component className', () => {
    const state = { activeWidgetId: 0 };
    const props = { state };
    const wrapper = shallow(<InputForm {...props} />);
    expect(wrapper.hasClass('rsk-widget-form')).to.eq(true);
  });
  describe('handleKeyDown', () => {
    const state = { activeWidgetId: 1 };
    const updateState = spy();
    const edge = { node: { id: state.activeWidgetId } };
    const viewer = { widgets: { edges: [edge] } };
    const props = { state, updateState, viewer };
    const preventDefault = spy();
    stub(InputForm.prototype, 'focusTextarea');
    props.handleUpdate = spy();
    props.handleAdd = spy();
    props.updateState = spy();

    afterEach(() => {
      props.handleUpdate = spy();
      props.handleAdd = spy();
      props.updateState = spy();
    });

    it('should call handleUpdate on enter when has value and activeWidgetId is truthy', () => {
      const wrapper = shallow(<InputForm {...props} />);
      wrapper.find('textarea').simulate('keyDown', { keyCode: 1, preventDefault, target: { value: 'test' } });
      wrapper.find('textarea').simulate('keyDown', { keyCode: 13, preventDefault, target: { value: 'test' } });
      expect(props.handleUpdate.called).to.eq(true);
    });
    it('should call handleAdd on enter when has value and activeWidgetId is falsy', () => {
      props.state.activeWidgetId = 0;
      const wrapper = shallow(<InputForm {...props} />);
      wrapper.find('textarea').simulate('keyDown', { keyCode: 1, preventDefault, target: { value: 'test' } });
      wrapper.find('textarea').simulate('keyDown', { keyCode: 13, preventDefault, target: { value: 'test' } });
      expect(props.handleAdd.called).to.eq(true);
    });
    it('should call updateState and reset textarea on esc when activeWidgetId is truthy', () => {
      const event = { keyCode: 27, preventDefault, target: { value: 'test' } };
      props.state.activeWidgetId = 1;
      const wrapper = shallow(<InputForm {...props} />);
      wrapper.find('textarea').simulate('keyDown', event);
      expect(props.updateState.calledWith({activeWidgetId: 0})).to.eq(true);
      expect(event.target.value).to.eq('');
    });
  });


});
