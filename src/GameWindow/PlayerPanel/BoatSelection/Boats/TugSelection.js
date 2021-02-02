import React from "react";
import { CELL_SIZE, TUG } from "../../../utils";

const TugSelection = ({
  setSelectedBoatHandler,
  onDragHandler,
}) => {
  return (
    <div
      onDrag={(e) => onDragHandler(e)}
      draggable
      onDragStart={() => setSelectedBoatHandler(TUG)}
      onDragEnd={() => setSelectedBoatHandler(null)}
      className="boat-selection"
      style={{ width: `${2 * CELL_SIZE}vh` }}
    >
      <div
        style={{
          borderTopLeftRadius: "80%",
          borderBottomLeftRadius: "80%",
          background: "#009fb7",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          borderTopRightRadius: "80%",
          borderBottomRightRadius: "80%",
          background: "#009fb7",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
    </div>
  );
};

export default TugSelection;
