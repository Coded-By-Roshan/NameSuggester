import React from 'react';
import NameCard from './Namecard'

function ResultContainer({names}) {
    const suggestednameJSX = names.map((name)=>{
        // return <p className="resultBox">{name}</p>
        return <NameCard suggestedNames={name}/>
    })
    return (
        <div className="resultContainer">
           <h2>Suggested Names:</h2>
           {/* <NameCard suggestedNames={suggestednameJSX}/> */}
            <p className="namesBox">
            {suggestednameJSX}
                </p>
        </div>
    )
}

export default ResultContainer
