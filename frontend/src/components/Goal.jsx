import React from "react";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar"
import './Goal.css'

const Goal = () => {
  return (
    <article >
            <div>
              <Badge className="badge" bg="primary">
                Medium
              </Badge>
              <Badge className="badge" bg="warning">
                3 months
              </Badge>
              <Badge className="badge" bg="danger">
                Skill
              </Badge>
            </div>
            <div id="progressContainer">
            <ProgressBar striped animated variant="success" now={30} label="30%" />
            </div>
           
          </article>
  )
}

export default Goal