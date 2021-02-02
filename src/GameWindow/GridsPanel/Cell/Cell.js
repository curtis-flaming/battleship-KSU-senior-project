import React from "react";
import { styles } from "./CellStyles";

const Cell = ({ id, value, onBoatDrop }) => {
  var values;
  if (value !== null) {
    values = value.split(" ");
    var style = {
      ...styles["default"],
      ...styles[`${values[0]}`],
      ...styles[`${values[1]}`],
      ...styles[`${values[2]}`],
    };
  }

  return (
    <div
      className="cell"
      onDrop={() => onBoatDrop(id)}
      onDragOver={(e) => e.preventDefault()}
    >
      {/* {renderValue} */}
      <div style={style}></div>
    </div>
  );
};

export default Cell;
