import React from 'react';
export default (props) => (
  <div className="widget-avatar">
    <img title={props.viewer.name} src="https://unsplash.it/28" alt="avatar" />
  </div>
);

