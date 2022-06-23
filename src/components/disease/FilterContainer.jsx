import React, { useEffect, useState } from "react";
import SymtomFillterComponent from "./SymtomFillterComponent";
import disease from "../../db/disease.json";
import symtoms from "../../db/symptoms.json";
import ShowMore from "react-show-more-button";

const parsingSymtoms = (srcJson) => {
  return srcJson.map((key) => key.symptomname);
};
const initialSymptomValueArray = parsingSymtoms(symtoms);

function FilterContainer() {
  const [symptomValueMap, setSymptomValueMap] = useState(new Map());
  const setMap = (key, value) => {
    setSymptomValueMap((prev) => new Map([...prev, [key, value]]));
  };
  const symptomButtons = initialSymptomValueArray.map((element) => (
    <SymtomFillterComponent
      key={element}
      symptomName={element}
      setParentStateCallback={setMap}
    />
  ));
  return (
    <div className="border-bottom pb-4 ">
      <ShowMore
        maxHeight={300}
        styleButton={{
          backgroundColor: "#C9E5BB",
          border: "1px solid #C9E5BB",
          color: "#000000",
        }}
      >
        <div className="button_container flex-horiz">{symptomButtons}</div>
      </ShowMore>
      <div className="search_container">
        <button className="search_button">검색</button>
      </div>
    </div>
  );
}

export default FilterContainer;
