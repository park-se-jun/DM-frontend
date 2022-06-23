import React, { useState } from "react";
import SymtomFillterComponent from "./SymtomFillterComponent";

function FilterContainer() {
  return (
    <div className="border-bottom pb-4 ">
      <div className="button_container flex-horiz">
        {/* 추후 수정 필요 */}
        <SymtomFillterComponent key={"고열"} symptomName={"고열"}/>
        <SymtomFillterComponent key={"복통"} symptomName={"복통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symptomName={"인후통"}/>
      </div>
      <div className="search_container">
        <button className="search_button">검색</button>
      </div>
    </div>
  );
}

export default FilterContainer;
