import React from "react";

const Ready = ({ readyClick }) => {
  return (
    <div className="ready">
      <button onClick={() => readyClick()} className="button">
        READY
      </button>
    </div>
  );
};

export default Ready;
