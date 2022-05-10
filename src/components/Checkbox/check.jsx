import React from "react";
import "./checkbox.scss";
import "./galka.svg";

function Check({ isCompleted }) {
  return (
    <div className="checkbox">
      {isCompleted ? (
        <svg
          width="21"
          height="21"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.92775"
            y="1.47772"
            width="17.9607"
            height="23.1354"
            rx="4.98909"
            fill="#B5B5BA"
          />
          <path
            d="M14.7769 9.87628L14.6097 9.70779L14.4332 9.86641L9.72974 14.0916L7.38581 11.91L7.2089 11.7454L7.03873 11.917L6.24083 12.7217L6.06134 12.9027L6.24621 13.0782L9.555 16.2198L9.7235 16.3798L9.89503 16.223L15.5666 11.0408L15.7585 10.8655L15.5754 10.6809L14.7769 9.87628Z"
            fill="#F4F4F4"
            stroke="#F4F4F4"
            stroke-width="0.498909"
          />
          <rect
            x="1.92775"
            y="1.47772"
            width="17.9607"
            height="23.1354"
            rx="4.98909"
            stroke="#B5B5BA"
            stroke-width="1.99563"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="defaultcheck"
        >
          <rect
            x="1.92775"
            y="1.65007"
            width="17.9607"
            height="17.9607"
            rx="4.98909"
            stroke="#C4C4C4"
            stroke-width="1.99563"
          />
        </svg>
      )}
    </div>
  );
}

export default Check;
