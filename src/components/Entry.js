import React from "react";

const Entry = ({ text, amount }) => {
  return (
    <div className="income">
      <li className="income-item">{text}</li>
      <li className="income-item">${amount}</li>
    </div>
  );
};

export default Entry;
