import React from "react";
import { BATTLESHIP, CELL_SIZE } from "../../../utils";

const BattleshipSelection = ({
  setSelectedBoatHandler,
  onDragHandler,
}) => {
  return (
    <div
      draggable
      onDrag={(e) => onDragHandler(e)}
      onDragStart={() => setSelectedBoatHandler(BATTLESHIP)}
      onDragEnd={() => setSelectedBoatHandler(null)}
      className="boat-selection"
      style={{ width: `${4 * CELL_SIZE}vh` }}
    >
      <div
        style={{
          borderTopLeftRadius: "80%",
          borderBottomLeftRadius: "80%",
          background: "#fe4a49",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          background: "#fe4a49",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          background: "#fe4a49",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          borderTopRightRadius: "80%",
          borderBottomRightRadius: "80%",
          background: "#fe4a49",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
    </div>
  );
};

export default BattleshipSelection;
