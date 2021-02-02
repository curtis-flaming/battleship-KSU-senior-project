import React from "react";
import { connect } from "react-redux";
import { DROP_BOAT } from "../../../../redux/Actions";
import Cell from "../../Cell/Cell";


const PlayerGrid = ({ playerGrid, selectedBoat, boatOrientation, dropBoatDispatch }) => {

 const dropBoatHandler = (index) => {
    dropBoatDispatch(index, selectedBoat, boatOrientation)
 }
  
  const renderGrid = playerGrid.map((cell) => (
    <Cell key={cell.id} id={cell.id} value={cell.value} onBoatDrop={dropBoatHandler}/>
  ));

  return <div className="player-grid">{renderGrid}</div>;
};

const mapState = (state) => {
  return {
    playerGrid: state.playerGrid,
    selectedBoat: state.selectedBoat,
    boatOrientation: state.boatOrientation
  };
};

const mapDispatch = (dispatch) => {
  return {
    dropBoatDispatch: (index, selected, orientation)=> dispatch(DROP_BOAT(index, selected, orientation)),
  };
};

export default connect(mapState, mapDispatch)(PlayerGrid);
