import React, { useState } from "react";
import PropTypes from "prop-types";
function SymtomFillterComponent({ symptomName, initialValue, clickable }) {
  const [value, setValue] = useState(initialValue);
  const colorSet = [
    "#FFFFFF",
    "#EBFFC0",
    "#DAFA97",
    "#B8DF66",
    "#96BF3F",
    "#79A321",
  ];

  return (
    <>
      <button
        className="disease_button"
        style={{ backgroundColor: colorSet[value] }}
        onClick={() => {
          if(clickable)
            setValue((prev) => (prev + 1) % 6);
          else return;
        }}
      >
        {symptomName}
      </button>
    </>
  );
}

export default SymtomFillterComponent;

SymtomFillterComponent.propTypes = {
  symptomName: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
  clickable: PropTypes.bool,
};
SymtomFillterComponent.defaultProps = {
  initialValue: 0,
  clickable: true,
};
