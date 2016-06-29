import React from 'react';

class InputForm extends React.Component {
  render() {
    const isEnterKeyUsed = (event) => {
      const enterKey = 13;
      if (event.keyCode === enterKey ) {
        event.preventDefault();
        if (!event.target.value) {
          this.props.updateState({activeWidgetId: 0});
          return;
        }
        return true;
      }
    };

    const handleAdd = (event) => isEnterKeyUsed(event) ? this.props.handleAdd(event) : null;
    const handleUpdate = (widget, event) => { isEnterKeyUsed(event) ? this.props.handleUpdate(widget, event) : null };

    this.props.state.activeWidgetId ? setTimeout(()=>this.refs.textareaEdit.focus()) : null;

    return (
      <div className="rsk-widget-form">
        {
          !!this.props.state.activeWidgetId
            ?
            this.props.viewer.widgets.edges
              .filter(edge => edge.node.id === this.props.state.activeWidgetId )
              .map(edge => (
                <textarea
                  ref="textareaEdit"
                  defaultValue={edge.node.body}
                  placeholder="Type a message..."
                  key={edge.node.id}
                  onKeyDown={handleUpdate.bind(this, edge.node)}
                />
              ))
            :
            <textarea autoFocus={true} ref="textareaAdd" placeholder="Type a message..." onKeyDown={handleAdd} />
        }
      </div>
    );
  }
}



export default InputForm;
