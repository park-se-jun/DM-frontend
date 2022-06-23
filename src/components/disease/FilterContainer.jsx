import React, { useState } from "react";
import SymtomFillterComponent from "./SymtomFillterComponent";
import disease from '../../db/disease.json';
import symtoms from '../../db/symptoms.json';
import ShowMore from 'react-show-more-button';

function FilterContainer() {

  let symtomsName = [];

  const parsingData = () => {
    symtoms.map(key =>symtomsName.push(key.symptomname));;
  }

  return (
    <div className="border-bottom pb-4">
      {parsingData()}
      <ShowMore maxHeight={300} styleButton={{backgroundColor: "#C9E5BB", border: '1px solid #C9E5BB', color: '#000000'}}>
        <div className="button_container ">
          {
            symtoms.map((element, index) => index < symtomsName.length ? <SymtomFillterComponent key={"고열"} symtomName={symtomsName[index]}/> : null)
          }
        </div>
      </ShowMore>
      <div className="search_container">
        <button className="search_button">검색</button>
      </div>
    </div>
  );
}

export default FilterContainer;
