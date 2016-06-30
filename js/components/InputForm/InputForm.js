import React from 'react';

class InputForm extends React.Component {

  focusTextarea() {
    return () => this.refs.textarea.focus();
  }

  render() {
    const isKeyUsed = (event = {}, key) => event.keyCode === key;

    const handleKeyDown = (widget, event) => {
      const enterKey = 13;
      const escKey = 27;
      const activeWidgetId = this.props.state.activeWidgetId;
      if (isKeyUsed(event, enterKey) && event.target.value) {
        event.preventDefault();
        if (!activeWidgetId) {
          return this.props.handleAdd(event);
        }
        this.props.updateState({activeWidgetId: 0});
        return this.props.handleUpdate(widget, event);
      }
      if (isKeyUsed(event, escKey) && activeWidgetId) {
        event.preventDefault();
        event.target.value = '';
        return this.props.updateState({activeWidgetId: 0});
      }
    };

    this.props.state.activeWidgetId ? setTimeout(this.focusTextarea()) : null;

    return (
      <div className="rsk-widget-form">
        {
          !!this.props.state.activeWidgetId
            ?
            this.props.viewer.widgets.edges
              .filter(edge => edge.node.id === this.props.state.activeWidgetId )
              .map(edge => (
                <textarea
                  ref="textarea"
                  defaultValue={edge.node.body}
                  placeholder="Type a message..."
                  key={edge.node.id}
                  onKeyDown={handleKeyDown.bind(this, edge.node)}
                />
              ))
            :
            <textarea autoFocus={true} ref="textarea" placeholder="Type a message..." onKeyDown={handleKeyDown.bind(this, {})} />
        }
      </div>
    );
  }
}



export default InputForm;
