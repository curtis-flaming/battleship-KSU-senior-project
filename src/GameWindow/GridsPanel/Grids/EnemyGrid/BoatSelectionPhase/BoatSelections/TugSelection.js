import React from "react";
import { connect } from "react-redux";
import { SET_SELECTED_BOAT } from "../../../../../../redux/Actions";
import { TUG } from "../../../../../../redux/types/BoatTypes";
import BoatSelection from "./BoatSelection";

const TugSelection = ({ setBoatSelection }) => {
  return (
    <div
      className="tug-selection"
      draggable="true"
      onDragStart={() => setBoatSelection(TUG)}
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

export default connect(null, mapDispatch)(TugSelection);
