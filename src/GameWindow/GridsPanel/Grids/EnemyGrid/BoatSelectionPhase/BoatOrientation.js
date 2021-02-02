import React from 'react';
import { connect } from 'react-redux';

const BoatOrientation = ({boatOrientation}) => {
    return (
        <div className='boat-orientation'>
            {boatOrientation === 'horizontal'? <div className='horizontal-orientation'>h</div> : <div>v</div>}
        </div>
    );
};

const mapState = (state) => {
    return {
        boatOrientation: state.boatOrientation
    }
}

export default connect(mapState)(BoatOrientation);