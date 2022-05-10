import React from "react";
import "../AddTask/addTask.scss";
import Check from "../Checkbox/check";

const AddTask = ({ inputNameRef, handleAddTask }) => {
  return (
    <div className="addTask">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.42666"
          y="2.46796"
          width="16.9629"
          height="16.9629"
          rx="4.49018"
          fill="#E2E2E2"
        />
        <rect
          x="2.42666"
          y="2.46796"
          width="16.9629"
          height="16.9629"
          rx="4.49018"
          stroke="#E2E2E2"
          stroke-width="2.99345"
        />
      </svg>

      <input
        className="addTask___task"
        type="text"
        name="addTask"
        ref={inputNameRef}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
        placeholder="Write a task..."
      />
    </div>
  );
};

export default AddTask;
