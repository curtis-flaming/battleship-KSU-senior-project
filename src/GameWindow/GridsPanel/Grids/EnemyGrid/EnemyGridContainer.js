import React from "react";
import BoatSelectionPhase from "./BoatSelectionPhase/BoatSelectionPhase";
import EnemyGrid from "./EnemyGrid";

const EnemyGridContainer = ({ isBoatSelectionPhase }) => {
  return (
    <div className="enemy-grid-container">
      {isBoatSelectionPhase ? <BoatSelectionPhase /> : <EnemyGrid />}
    </div>
  );
};

export default EnemyGridContainer;
