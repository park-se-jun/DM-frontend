import React, { useState } from "react";
import SymtomFillterComponent from "./SymtomFillterComponent";

function FilterContainer() {
  return (
<<<<<<< HEAD
    <div className="border-bottom pb-4 ">
      <div className="button_container flex-horiz">
        {/* 추후 수정 필요 */}
        <SymtomFillterComponent key={"고열"} symtomName={"고열"}/>
        <SymtomFillterComponent key={"복통"} symtomName={"복통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
=======
    <div className="border-bottom pb-4">
      <div className="button_container ">
        <SymtomFillterComponent key={"고열"} symtomName={"고열"}/>
        <SymtomFillterComponent key={"복통"} symtomName={"복통"}/>
        <SymtomFillterComponent key={"인후통"} symtomName={"인후통"}/>
>>>>>>> park-se-jun
      </div>
      <div className="search_container">
        <button className="search_button">검색</button>
      </div>
    </div>
  );
}

export default FilterContainer;
