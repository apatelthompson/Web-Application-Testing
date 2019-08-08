import React from "react";

const Dashboard = props => {
  const { atBat, setAtBat } = props;

  // const clickHandle = event => {
  //   if(event.target.name === 'strike')
  // };

  return (
    <div className="dashboard">
      <button onClick={clickHandle} name="strike">
        Strike
      </button>
      <button onClick={clickHandle} name="ball">
        Ball
      </button>
      <button onClick={clickHandle} name="foul">
        Foul
      </button>
      <button onClick={clickHandle} name="hit">
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
