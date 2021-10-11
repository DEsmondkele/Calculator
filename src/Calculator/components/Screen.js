import React from 'react';


const Screen=({equation,result})=> {
    return(
        <div className="screen">
            <h1 style={{fontSize: '20px',marginBottom:"3px",marginRight:"2rem"}}>{result}</h1>
            <p style={{fontSize:"bold",marginRight:"2rem"}}>{equation}</p>
        </div>
    )
}
export default Screen;