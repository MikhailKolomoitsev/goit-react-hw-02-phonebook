import React from "react";
import { v4 as uuidv4 } from "uuid";

const Filter = ({ value, handler }) => {
  const id = uuidv4();
  return (
    <>
      <label htmlFor={id}></label>
      <input id={id} type="text" value={value} onChange={handler} />
    </>
  );
};

export default Filter;
