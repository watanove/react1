import React, { Component } from 'react';

// class App extends Component {
//   render() {
//
//     const con="conJSX"
//     const x=<React.Fragment>
//       <label htmlFor="xxx">へへー</label>
//       <input id="xxx" type="text" className="houhou"  onChange={()=>{console.log(1)}}/>
//     </React.Fragment>
//     return x//<h1>Hello!!!</h1>
//   }
// }
// class App extends Component {
//   render() {
//     return React.createElement(トランスパイルの時にはこれが行われるので
// import Reactは必須なのです。
//       "div",
//       null,
//       "<span style='color:red;'>Hello!!!!!!!</span>"
//     )
//   }
// }

const App=()=>{
  return<div>
    <Ban/>
    <Ban/>
  </div>
}

const Ban=()=><div>IamChampion</div>
export default App;
