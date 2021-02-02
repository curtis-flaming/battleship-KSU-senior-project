import React from 'react';
import GameWindow from './GameWindow/GameWindow';
import './TempStyle.css'
import './GameWindow/GridsPanel/Grids/Grids.css'
import './GameWindow/GridsPanel/Cell/Cell.css'
import './GameWindow/GridsPanel/Grids/EnemyGrid/BoatSelectionPhase/BoatSelectionPhase.css'
const AppContainer = () => {
    return (
        <div className='app-container'>
            <GameWindow/>
        </div>
    );
};

export default AppContainer;