import React from 'react';

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
  const x=[{name:"ban",age:"10"},{name:"che",agex:"20"}]
  return<div>
    {x.map(function(xx){return <Ban key={xx.name+xx.age} name={xx.name} age={xx.age} />})}
  </div>
}


const Ban=(props)=><div>{props.name}IamChampion and aged{props.age}</div>

Ban.defaultProps={
  age:100
}
export default App;
