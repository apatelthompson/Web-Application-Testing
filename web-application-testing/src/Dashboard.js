import React from "react";

const Dashboard = props => {
  const { atBat, setAtBat } = props;

  const clickHandle = event => {
    if (event.target.name === "strike") {
      atBat.strikes < 2
        ? setAtBat({ ...atBat, strikes: atBat.strikes + 1 })
        : setAtBat({ ...atBat, strikes: 0, balls: 0, fouls: 0 });
    } else if (event.target.name === "foul") {
      if (atBat.fouls < 3) {
        atBat.strikes < 2
          ? setAtBat({
              ...atBat,
              strikes: atBat.strikes + 1,
              fouls: atBat.fouls + 1
            })
          : setAtBat({ ...atBat, strikes: 0, balls: 0, fouls: 0 });
      } else setAtBat({ ...atBat, strikes: 0, balls: 0, fouls: 0 });
    } else if (event.target.name === "ball") {
      atBat.balls < 3
        ? setAtBat({ ...atBat, balls: atBat.balls + 1 })
        : setAtBat({
            ...atBat,
            strikes: 0,
            balls: 0,
            fouls: 0,
            hits: (atBat.hits = 1)
          });
    } else if (event.target.name === "hit") {
      setAtBat({
        ...atBat,
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: (atBat.hits = 1)
      });
    }
  };

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
