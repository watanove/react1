import React,{Component} from 'react';

const App=()=>(<Counter/>)


class Counter extends Component{
  constructor (props){
    super(props)
    console.log(this.state)
    this.state={count:0}
  }
  handleButton=(i)=>{
    this.setState({count:this.state.count+this.v})
  }
  x=()=>{
    this.state.count=100
  }
  render(){
    console.log(this.state)
    return (<React.Fragment><div>this.state.count={this.state.count}</div>
      <button onClick={this.handleButton} data-v={10}>おしてー</button>
      <button onClick={this.handleButton} data-v={-10}>おしてー</button>
      <button onClick={this.x}>押しても画面は変わりません。</button>
      </React.Fragment>

    )
  }
}
export default App;
