import React from "react";
import { HORIZONTAL } from "../../utils";

const BoatOrientationDisplay = ({ boatOrientation }) => {
  if (boatOrientation === HORIZONTAL) {
    var renderBoat = <div style={{display: 'flex'}}>
        <div style={{background: '#323031', height: '3.5vh', width: '3.5vh', borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%'}}></div>
        <div style={{background: '#323031', height: '3.5vh', width: '3.5vh'}}></div>
        <div style={{background: '#323031', height: '3.5vh', width: '3.5vh', borderTopRightRadius: '50%', borderBottomRightRadius: '50%'}}></div>
    </div>;
  } else {
    var renderBoat = <div style={{display: 'flex', flexDirection:'column'}}>
    <div style={{background: '#323031', height: '3.5vh', width: '3.5vh', borderTopLeftRadius: '50%', borderTopRightRadius: '50%'}}></div>
    <div style={{background: '#323031', height: '3.5vh', width: '3.5vh'}}></div>
    <div style={{background: '#323031', height: '3.5vh', width: '3.5vh', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%'}}></div>
</div>;
  }

  return <div className="boat-orientation-display">{renderBoat}</div>;
};

export default BoatOrientationDisplay;
