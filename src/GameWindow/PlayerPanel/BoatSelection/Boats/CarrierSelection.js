import React from "react";
import { CARRIER, CELL_SIZE } from "../../../utils";

const CarrierSelection = ({
  setSelectedBoatHandler,
  onDragHandler
}) => {
  
  return (
    <div
      onDrag={(e) => onDragHandler(e)}
      draggable
      onDragStart={() => setSelectedBoatHandler(CARRIER)}
      onDragEnd={() => setSelectedBoatHandler(null)}
      className="boat-selection"
      style={{ width: `${5 * CELL_SIZE}vh` }}
    >
      <div
        style={{
          borderTopLeftRadius: "80%",
          borderBottomLeftRadius: "80%",
          background: "#fe9158",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          background: "#fe9158",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          background: "#fe9158",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          background: "#fe9158",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
      <div
        style={{
          borderTopRightRadius: "80%",
          borderBottomRightRadius: "80%",
          background: "#fe9158",
          width: `${CELL_SIZE}vh`,
          height: `${CELL_SIZE}vh`,
        }}
      ></div>
    </div>
  );
};

export default CarrierSelection;
