import React,{useState} from 'react';
import Screen from './Calculator/components/Screen';
import NumberButton from './Calculator/components/NumberButton';
import './Calculator/calculator.css'
import OperatorButton from './Calculator/components/OperatorButton';

const App=()=> {
    const[equation,setEquation]=useState("0");
    const[result, setResult]=useState(0);
    const loadEquation=(numArray,operatorArray,item)=>{
        if(numArray.includes(item)){
            let data=equation+item
            setEquation(data)
            console.log(data);
        }
        else if(operatorArray.includes(item)){
            let data=equation+" "+item+" "
            setEquation(data);
            console.log(data);
        }
    }
    const loadResult =()=> {
        if (equation !==""){
        
           let result = eval(equation);
           setResult(result)
        }else{
            setResult(0)
        }
    }
    const clearResult =()=>{
        setEquation("")
        setResult(0)
    }
    return(
        <div className='calculator-container'>
            <Screen equation={equation}result={result}/>
            <div className="button-container">
            <NumberButton loadEquation={loadEquation}/>
            <OperatorButton loadEquation={loadEquation} 
            loadResult={loadResult} clearResult={clearResult}/>
            </div>
        </div>
    )
}
export default App;