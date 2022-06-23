import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
function SymtomFillterComponent({
  symptomName,
  initialValue,
  clickable,
  setParentStateCallback,
}) {
  const [value, setValue] = useState(initialValue);
  const colorSet = [
    "#FFFFFF",
    "#EBFFC0",
    "#DAFA97",
    "#B8DF66",
    "#96BF3F",
    "#79A321",
  ];
  useEffect(() => {
    //버튼의 value가 변경되면
    if (setParentStateCallback !== null)
      setParentStateCallback(symptomName, value); // 버튼의 value와 키를 부모로 보낸다
  }, [value]);

  return (
    <>
      <button
        className="disease_button"
        style={{ backgroundColor: colorSet[value] }}
        onClick={() => {
          if (clickable) {
            setValue((prev) => (prev + 1) % 6);
          } else return;
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
  setParentStateCallback: PropTypes.func || null,
};
SymtomFillterComponent.defaultProps = {
  initialValue: 0,
  clickable: true,
  setParentStateCallback: null,
};
