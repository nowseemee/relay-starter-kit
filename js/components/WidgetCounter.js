import React from 'react';

const WidgetCounter = (props) =>
  <div className="rsk-widget-counter"><b className="count">{props.viewer.widgetsCount} items</b></div>;

export default WidgetCounter;
