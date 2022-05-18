import React from "react";
import { useState } from "react";
import data from '../data'
import GoalList from "../components/GoalList";

const Goals = () => {

  const [goals, setGoals] = useState(data);
  return (
    <div>
      <h2>Goal</h2>
     <GoalList goals={goals}/>
    </div>
  );
};

export default Goals;
