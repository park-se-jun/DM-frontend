import React, { useState } from 'react'

function SymtomFillterComponent({symtomName}) {
  const [value, setValue] = useState(0);
    const colorSet = ["#FFFFFF","#EBFFC0","#DAFA97","#B8DF66","#96BF3F","#79A321"]
    
  return (
    <>
    <button className='disease_button' style={{backgroundColor:colorSet[value]}} onClick={()=>{setValue((prev)=>(prev+1)%6)}}>{symtomName}</button>
    </>

    
  )
}

export default SymtomFillterComponent