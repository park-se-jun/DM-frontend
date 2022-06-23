import React, { useState } from 'react'
import disease from '../../db/disease.json';
import symtoms from '../../db/symptoms.json';


function SymtomFillterComponent({symtomName}) {
  
  const [value, setValue] = useState(0);
  //const [symtomsName, setSymtomsName] = useState([]);
  let symtomsName = [];

  const colorSet = ["#FFFFFF","#EBFFC0","#DAFA97","#B8DF66","#96BF3F","#79A321"];

  const parsingData = () => {
    symtoms.map(key =>symtomsName.push(key.symptomname));;
  }


  return (
    <>
    <button className='disease_button' style={{backgroundColor:colorSet[value]}} onClick={()=>{setValue((prev)=>(prev+1)%6)}}>{symtomName}</button>
    </>
    
  )
}

export default SymtomFillterComponent