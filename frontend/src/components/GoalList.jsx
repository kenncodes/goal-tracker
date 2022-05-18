import React from "react";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar"
const Goal = ({ goals }) => {
  return (
    <div>
      {goals.map((goal) => {
        const { id, difficulty, time, category } = goal;
        return (
          <article key={id}>
            <div>
              <Badge className="badge" bg="primary">
                {difficulty}
              </Badge>
              <Badge className="badge" bg="primary">
                {time}
              </Badge>
              <Badge className="badge" bg="primary">
                {category}
              </Badge>
            </div>
            <ProgressBar striped variant="success" now={40} />
          </article>
        );
      })}
    </div>
  );
};

export default Goal;
