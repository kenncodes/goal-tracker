import React from "react";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar"
import Goal from "../components/Goal"

const GoalList = ({ goals }) => {
  return (
    <div>
      {goals.map((goal) => {
        const { id, difficulty, time, category } = goal;
        return (
          <article key={id}>
          <Goal goal={goal}/>
          </article>
        );
      })}
    </div>
  );
};

export default GoalList;
