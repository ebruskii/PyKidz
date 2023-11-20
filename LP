import React from "react";
import { WelcomeToPykidz } from "./WelcomeToPykidz";
import "./style.css";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="overlap">
        <WelcomeToPykidz className="welcome-to-pykidz-instance" />
        <div className="text-wrapper-2">Where Python Meets Playtime</div>
      </div>
      <div className="overlap-group">
        <div className="text-wrapper-3">Introduction to Python</div>
        <p className="p">
          Learn the basics of Python syntax and programming concepts. Start writing your first Python programs
        </p>
      </div>
      <div className="overlap-2">
        <div className="text-wrapper-4">Fun Learning</div>
        <p className="text-wrapper-5">
          Turn coding into playtime! Our game-based approach makes learning Python enjoyable and captivating for young
          minds.
        </p>
      </div>
      <div className="overlap-3">
        <div className="text-wrapper-6">Progress Tracking</div>
        <p className="parents-can-monitor">
          Parents can monitor their child&#39;s progress, celebrate achievements, and watch as coding skills grow with
          our easy-to-use tracking system.
        </p>
      </div>
    </div>
  );
};
