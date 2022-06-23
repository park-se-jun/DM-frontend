import React, { useState } from "react";
import SymptomFillterComponent from "./SymtomFillterComponent";

function FilterContainer() {
  return (
    <div className="border-bottom pb-4">
      <div className="button_container ">
        <SymptomFillterComponent key={"고열"} symptomName={"고열"}/>
        <SymptomFillterComponent key={"복통"} symptomName={"복통"}/>
        <SymptomFillterComponent key={"인후통"} symptomName={"인후통"}/>
      </div>
      <div className="search_container">
        <button className="search_button">검색</button>
      </div>
    </div>
  );
}

export default FilterContainer;
