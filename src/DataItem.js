import React from "react";

const DataItem = (props) => (
  <div>
    <h3>{props.title}</h3>
    <h4>{props.children}</h4>
  </div>
);
export default DataItem;
