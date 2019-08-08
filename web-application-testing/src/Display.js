import React from "react";

const Display = props => {
  const { atBat } = props;

  return (
    <div className="display">
      <h2>Strikes</h2>
      <h2>Balls</h2>
    </div>
  );
};

export default Display;
