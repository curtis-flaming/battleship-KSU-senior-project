import React, { useState } from "react";
import { connect } from "react-redux";
import EnemyGridContainer from "./Grids/EnemyGrid/EnemyGridContainer";
import PlayerGridContainer from "./Grids/PlayerGrid/PlayerGridContainer";

const GridsPanel = ({
  isBoatSelectionPhase,
  setBoatSelectionPhaseDispatch,
}) => {
  const [boatSelector, setBoatSelector] = useState({
    battleship: true,
    carrier: true,
    destroyer: true,
    sub: true,
    tug: true,
  });

  return (
    <div className="grids-panel">
      <PlayerGridContainer />
      <EnemyGridContainer isBoatSelectionPhase={isBoatSelectionPhase} />
    </div>
  );
};

const mapState = (state) => {
  return {
    isBoatSelectionPhase: state.isBoatSelectionPhase,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setBoatSelectionPhaseDispatch: () => dispatch(),
  };
};

export default connect(mapState, mapDispatch)(GridsPanel);
