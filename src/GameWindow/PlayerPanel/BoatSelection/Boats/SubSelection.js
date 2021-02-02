import React from "react";

import { CELL_SIZE, SUB } from "../../../utils";

const SubSelection = ({
  setSelectedBoatHandler,
  onDragHandler,
}) => {
  return (
    <div
      onDrag={(e) => onDragHandler(e)}
      draggable
      onDragStart={() => setSelectedBoatHandler(SUB)}
      onDragEnd={() => setSelectedBoatHandler(null)}
      className="boat-selection"
      style={{ width: `${3 * CELL_SIZE}vh` }}
    >
      <div
        style={{
          borderTopLeftRadius: "80%",
          borderBottomLeftRadius: "80%",
          background: "#7fbb8f",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          background: "#7fbb8f",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          borderTopRightRadius: "80%",
          borderBottomRightRadius: "80%",
          background: "#7fbb8f",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
    </div>
  );
};

export default SubSelection;
