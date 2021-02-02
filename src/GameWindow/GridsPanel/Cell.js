import React from "react";
import { styles } from "./CellStyles";

const Cell = ({
  id,
  hover,
  hit,
  boat,
  piece,
  dropHandler,
  orientation,
}) => {
  const cellStyle = {
    ...styles[boat],
    ...styles[piece],
    ...styles[orientation],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  const hoverStyle = {
    hover: {background: 'pink'} 
  }
  var innerValue;
  if (hit === "miss") {
    innerValue = (
      <div style={cellStyle}>
        <div className="miss">X</div>
      </div>
    );
  } else if (hit === "hit") {
    innerValue = (
      <div style={cellStyle}>
        <div className="hit"></div>
      </div>
    );
  } else {
    innerValue = <div style={cellStyle}></div>;
  }

  return (
    <div
      style={hoverStyle[hover]}
      className="cell"
      onDrop={() => dropHandler(id)}
      onDragOver={(e) => e.preventDefault()}
      // onDragEnter={() => dragEnterHandler(id)}
      // onDragLeave={() => dragLeaveHandler(id)}
    >
      {innerValue}
    </div>
  );
};

export default Cell;
