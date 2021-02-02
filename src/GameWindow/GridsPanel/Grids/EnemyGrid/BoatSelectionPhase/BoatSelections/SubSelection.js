import React from "react";
import { connect } from "react-redux";
import { SET_SELECTED_BOAT } from "../../../../../../redux/Actions";
import { SUB } from "../../../../../../redux/types/BoatTypes";
import BoatSelection from "./BoatSelection";

const SubSelection = ({ setBoatSelection }) => {
  return (
    <div
      className="sub-selection"
      draggable="true"
      onDragStart={() => setBoatSelection(SUB)}
    >
      <BoatSelection />
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    setBoatSelection: (boat) => dispatch(SET_SELECTED_BOAT(boat)),
  };
};

export default connect(null, mapDispatch)(SubSelection);
