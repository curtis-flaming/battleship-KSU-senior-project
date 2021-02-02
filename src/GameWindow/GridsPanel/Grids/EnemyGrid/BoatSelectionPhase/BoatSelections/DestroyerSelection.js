import React from "react";
import { connect } from "react-redux";
import { SET_SELECTED_BOAT } from "../../../../../../redux/Actions";
import { DESTROYER } from "../../../../../../redux/types/BoatTypes";
import BoatSelection from "./BoatSelection";

const DestroyerSelection = ({ setBoatSelection }) => {
  return (
    <div
      className="destroyer-selection"
      draggable="true"
      onDragStart={() => setBoatSelection(DESTROYER)}
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

export default connect(null, mapDispatch)(DestroyerSelection);
