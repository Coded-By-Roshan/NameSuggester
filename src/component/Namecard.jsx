import React from 'react'

function Namecard({suggestedNames}) {
    // const suggestednameJSX = suggestedNames.map((name)=>{
    //     return <p className="resultBox">{name}</p>
    // })
    return (
        <div className="namesBox">
            <p className="resultBox">
            {suggestedNames}
                </p>
        </div>
    )
}

export default Namecard
