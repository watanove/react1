import React,{Component} from 'react';

const App=()=>(<Counter/>)
let o={
x:function(){
  console.log('hello')
}
}

var o2={
  x(){},
  y:function(){}
}


class Counter extends Component{
  constructor (props){
    super(props)
    console.log(this.state)
    this.state={count:0}
  }
  handleButton=()=>{
    console.log(this.state)
  }
  render(){
    console.log(this.state)
    return (<React.Fragment><div>this.state.count={this.state.count}</div>
      <button onClick={this.handleButton}>おしてー</button></React.Fragment>
    )
  }
}
export default App;
