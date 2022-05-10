import React from "react";

const Panel = ({ children }) => {
  return (
    <div className="panel">
      <svg
        width="400"
        height="14"
        viewBox="0 0 400 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.00210571H399.127V7.98464C399.127 7.98464 277.19 13.4848 198.997 13.4726C121.245 13.4605 0 7.98464 0 7.98464V0.00210571Z"
          fill="#413F3F"
        />
      </svg>
      <div className="panel___container">{children}</div>
    </div>
  );
};

export default Panel;