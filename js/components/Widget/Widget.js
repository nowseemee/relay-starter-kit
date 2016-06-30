import React from 'react';
import TimeStamp from './TimeStamp';
import Body from './Body';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';
import Avatar from './Avatar';

const Widget = (props) => {
  const handleEditBtnClick = () => props.updateState({ activeWidgetId : props.widget.id });
  const handleDeleteBtnClick = () => props.handleRemove(props.widget);

  return (
    <li className="rsk-widget">
      <div className="widget-row">
        <Avatar {...props} />
        <Body {...props} />
        <EditBtn handleEditBtnClick={handleEditBtnClick} {...props} />
        <DeleteBtn handleDeleteBtnClick={handleDeleteBtnClick}  {...props} />
      </div>
      <TimeStamp {...props} />
    </li>
  );
};


export default Widget;
