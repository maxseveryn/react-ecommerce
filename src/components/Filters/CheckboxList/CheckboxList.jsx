import React from "react";
import CheckboxGroup from "react-checkbox-group";

import "./CheckboxList.css";

export default function CheckboxList({
  name,
  values,
  selectedValues,
  setSelectedValues,
}) {
  return (
    <CheckboxGroup
      name={name}
      value={selectedValues}
      onChange={setSelectedValues}
    >
      {(Checkbox) => (
        <>
          {values.map((val) => (
            <label className="checkbox__label" key={val}>
              <Checkbox className="checkbox__box" value={val} /> {val}
            </label>
          ))}
        </>
      )}
    </CheckboxGroup>
  );
}
