import React from "react";
import { connect } from "react-redux";
import { SET_SELECTED_BOAT } from "../../../../../../redux/Actions";
import { BATTLE_SHIP } from "../../../../../../redux/types/BoatTypes";
import BoatSelection from "./BoatSelection";

const BattleShipSelection = ({ setBoatSelection }) => {
  return (
    <div
      className="battleship-selection"
      draggable="true"
      onDragStart={() => setBoatSelection(BATTLE_SHIP)}
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

export default connect(null, mapDispatch)(BattleShipSelection);
