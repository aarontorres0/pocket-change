import React from "react";

const Entry = ({ text }) => {
  return (
    <div className="entry">
      <li className="income-item">{text}</li>
    </div>
  );
};

export default Entry;
