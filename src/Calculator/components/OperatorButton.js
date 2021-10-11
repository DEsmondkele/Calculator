import React from 'react';



const OperatorButton= ({loadEquation,loadResult,clearResult})=> {
    const operatorArray=["*","+","-","/","%","."]
    const numArray= ["1","2","3","4","5","6","7","8","9","0"]
    const equalArray=["="]
    return(
        <div>
       {operatorArray.map((operator,index) =><button className="num-button"
        key={index} onClick={()=>loadEquation(numArray,operatorArray,operator)}>{operator}</button>)}
       <button className="equal-button" onClick={clearResult}>C</button>
        <button className="equal-button" onClick={loadResult}>{equalArray[0]}</button>
        </div>
    )
}
export default OperatorButton;