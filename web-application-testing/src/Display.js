import React from "react";

const Display = props => {
  const { atBat } = props;

  return (
    <div className="display">
      <h2>Strikes {atBat.strikes}</h2>
      <h2>Balls {atBat.balls}</h2>
    </div>
  );
};

export default Display;
