import React from 'react';
import AircraftCarrierSelection from './BoatSelections/AircraftCarrierSelection';
import BattleShipSelection from './BoatSelections/BattleShipSelection';
import DestroyerSelection from './BoatSelections/DestroyerSelection';
import SubSelection from './BoatSelections/SubSelection';
import TugSelection from './BoatSelections/TugSelection';

const BoatSelectionContainer = () => {
    return (
        <div className='boat-selection-container'>
            <BattleShipSelection/>
            <AircraftCarrierSelection/>
            <DestroyerSelection/>
            <SubSelection/>
            <TugSelection/>
        </div>
    );
};

export default BoatSelectionContainer;