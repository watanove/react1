import React,{Component} from 'react';
import {connect} from 'react-redux';
import {increment,decrement} from '../actions'

class App extends Component{
  handleX = () =>{
    console.log("N?")
    this.setState({value:this.state.value+1})
  }

  render(){
    console.log(this.props)
    const props=this.props
    return (<React.Fragment><div>this.state.value={props.value}</div>
      <button onClick={props.increment}>おしてー</button>
      <button onClick={props.decrement}>おしてー</button>
      </React.Fragment>
    )
  }
}

 const mapStateToProps=state=>({value:state.count.value})
const mapDispacthToProps=dispatch=>({
  increment:()=>dispatch(increment()),
  decrement:()=>dispatch(decrement())
})
export default connect(mapStateToProps,mapDispacthToProps)(App)
