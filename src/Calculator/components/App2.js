// import React, { Component } from 'react';
// import './App.css';
// import ResultComponent from './ResultComponent';
// import KeyPad from './KeyPad';

// class App extends Component {
//     constructor(){
//         super();

//         this.state = {
//             result: ""
//         }
//     }
    

//     calculate = () => {
//         try {
//             this.setState({
//                 // eslint-disable-next-line
//                 result: (eval(this.state.result) || "" ) + ""
//             })
//         } catch (e) {
//             this.setState({
//                 result: "error"
//             })

//         }
//     };

//     reset = () => {
//         this.setState({
//             result: ""
//         })
//     };

//     backspace = () => {
//         this.setState({
//             result: this.state.result.slice(0, -1)
//         })
//     };

//     render() {
//         return (
//             <div>
//                 <div className="calculator-body">
//                     <h1>Simple Calculator</h1>
//                     <ResultComponent result={this.state.result}/>
//                     <KeyPad onClick={this.onClick}/>
//                 </div>
//             </div>
//         );
//     }
// }
// export default App;
