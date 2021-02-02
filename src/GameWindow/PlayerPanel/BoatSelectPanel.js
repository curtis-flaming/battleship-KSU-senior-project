import React from "react";
import Ready from "./BoatSelection/Ready";
import BattleShipSelection from "./BoatSelection/Boats/BattleShipSelection";
import CarrierSelection from "./BoatSelection/Boats/CarrierSelection";
import DestroyerSelection from "./BoatSelection/Boats/DestroyerSelection";
import SubSelection from "./BoatSelection/Boats/SubSelection";
import TugSelection from "./BoatSelection/Boats/TugSelection";
import BoatOrientationDisplay from "./BoatSelection/BoatOrientationDisplay";

const BoatSelectPanel = ({onDragHandler, setSelectedBoatHandler, boatSelections, readyClick, boatOrientation}) => {
  return (
    <div className='boat-select-panel'>
      <BoatOrientationDisplay boatOrientation={boatOrientation}/>
      {boatSelections.carrier ? (
        <CarrierSelection
          onDragHandler={onDragHandler}
          setSelectedBoatHandler={setSelectedBoatHandler}
        />
      ) : null}
      {boatSelections.battleship ? (
        <BattleShipSelection
          onDragHandler={onDragHandler}
          setSelectedBoatHandler={setSelectedBoatHandler}
        />
      ) : null}
      {boatSelections.destroyer ? (
        <DestroyerSelection
          onDragHandler={onDragHandler}
          setSelectedBoatHandler={setSelectedBoatHandler}
        />
      ) : null}
      {boatSelections.sub ? (
        <SubSelection
          onDragHandler={onDragHandler}
          setSelectedBoatHandler={setSelectedBoatHandler}
        />
      ) : null}
      {boatSelections.tug ? (
        <TugSelection
          onDragHandler={onDragHandler}
          setSelectedBoatHandler={setSelectedBoatHandler}
        />
      ) : null}
      {Object.keys(boatSelections).some(
        (key) => boatSelections[key] === true
      ) ? null : (
        <Ready readyClick={readyClick} />
      )}
    </div>
  );
};

export default BoatSelectPanel;
