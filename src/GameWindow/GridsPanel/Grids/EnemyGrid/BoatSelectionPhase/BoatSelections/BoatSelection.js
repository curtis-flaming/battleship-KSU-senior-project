import React from "react";
import { connect } from "react-redux";
import { TOGGLE_ORIENTATION } from "../../../../../../redux/Actions";

const BoatSelection = ({ toggleBoatOrientation }) => {
  var ctrlToggle = true;

  const onDragHandler = (e) => {
    if (e.ctrlKey && ctrlToggle) {
      toggleBoatOrientation();
      ctrlToggle = false;
    }

    if (!e.ctrlKey) ctrlToggle = true;
  };

  return (
    <div
      className="boat-selection"
      draggable="true"
      onDrag={(e) => onDragHandler(e)}
    ></div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    toggleBoatOrientation: () => dispatch(TOGGLE_ORIENTATION()),
  };
};

export default connect(null, mapDispatch)(BoatSelection);
