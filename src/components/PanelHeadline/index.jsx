import React from "react";
import Icon from "../PanelHeadline/iconic.svg";

const PanelHeadline = ({
  name,
  onClick,
  categories,
  countTasks,
  countUnresolvedTasks,
}) => {
  return (
    <div className="headline" onClick={onClick}>
      <div className="headline__icon">
        <svg
          width="19"
          height="15"
          viewBox="0 0 19 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.92334 2.8972V12.8754C0.92334 13.4046 1.13359 13.9122 1.50785 14.2865C1.8821 14.6608 2.3897 14.871 2.91897 14.871H16.8884C17.4177 14.871 17.9253 14.6608 18.2995 14.2865C18.6738 13.9122 18.8841 13.4046 18.8841 12.8754V4.89284C18.8841 4.36356 18.6738 3.85596 18.2995 3.48171C17.9253 3.10745 17.4177 2.8972 16.8884 2.8972H10.9015L8.90588 0.901566H2.91897C2.3897 0.901566 1.8821 1.11182 1.50785 1.48607C1.13359 1.86033 0.92334 2.36793 0.92334 2.8972Z"
            fill="#413F3F"
            fill-opacity="0.4"
          />
        </svg>
      </div>
      <div className="headline__name">{name}</div>
      <div className="headline__line"></div>
      <div className="headline__toggle">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.96274 5.70863L0.729004 1.47489L2.14092 0.0639801L4.96274 2.8868L7.78457 0.0639801L9.19648 1.47489L4.96274 5.70863Z"
            fill="#413F3F"
          />
        </svg>
      </div>
      {!categories[name] && (
        <div className="headline__countTasks">
          {/* <img src={Icon} className="headline__countTasks__iconic" /> */}
          <div className="headline_countTasks__count">
            {countTasks}/{countUnresolvedTasks}
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelHeadline;
