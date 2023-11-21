import React from "react";
import "./Cards.css";
import { Code2 } from "lucide-react";
import { Puzzle } from "lucide-react";
import { Smile } from "lucide-react";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="card" id="card-a">
        <div className="backlogo">
          <Code2 size={60} />
        </div>
        <div className="card-content">
          <h2>Introduction to Python</h2>
          <p>
            Learn the basic of python syntax programming concepts with our fun,
            interactive, and rewarding lessons.
          </p>
        </div>
      </div>
      <div className="card" id="card-b">
        <div className="backlogo">
          <Puzzle size={60} />
        </div>
        <div className="card-content">
          <h2>Fun Learning</h2>
          <p>
            Turn coding into playtime! Our game-based approach makes learning
            Python enjoyable and captivating for young minds.
          </p>
        </div>
      </div>
      <div className="card" id="card-c">
        <div className="backlogo">
          <Smile size={60} />
        </div>
        <div className="card-content">
          <h2>Feel Rewarded</h2>
          <p>
            Celebrate your achievements, and watch as coding skills grow as you
            progress through our lessons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
