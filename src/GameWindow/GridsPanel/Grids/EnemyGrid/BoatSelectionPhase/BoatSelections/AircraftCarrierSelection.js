import React from "react";
import { connect } from "react-redux";
import { SET_SELECTED_BOAT } from "../../../../../../redux/Actions";
import { AIRCRAFT_CARRIER } from "../../../../../../redux/types/BoatTypes";
import BoatSelection from "./BoatSelection";

const AircraftCarrierSelection = ({ setBoatSelection }) => {
  return (
    <div
      className="aircraftcarrier-selection"
      draggable="true"
      onDragStart={() => setBoatSelection(AIRCRAFT_CARRIER)}
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

export default connect(null, mapDispatch)(AircraftCarrierSelection);
