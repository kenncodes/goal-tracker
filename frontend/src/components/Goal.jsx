import React from "react";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar"

import './Goal.css'

const Goal = () => {
  return (
    <article className="goalContainer" >
      <div>
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
            <div className='arrowRow'> <h1> Learn to drive</h1> p</div>
            <figcaption className="fig"> -- Learn to parallel park</figcaption>
            <div id="progressContainer">
            <ProgressBar striped animated variant="success" now={30} label="30%" />
            </div>
            </div>
            <div></div>
          </article>
  )
}

export default Goal