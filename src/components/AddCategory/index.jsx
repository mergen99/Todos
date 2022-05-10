import React from "react";
import "../AddCategory/AddCategory.scss";

const AddCategory = ({ inputCategoriesRef, handleAddCategory }) => {
  return (
    <div className="category">
      <div>
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
      <input
        type="text"
        name="addCategory"
        className="category___addCategory"
        ref={inputCategoriesRef}
        onKeyPress={(e) => e.key === "Enter" && handleAddCategory()}
        placeholder="Write a category..."
      />
    </div>
  );
};

export default AddCategory;
