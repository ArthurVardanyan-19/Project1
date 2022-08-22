
import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent/FirstComponent';
import SecondCounter from './SecondCounter/SecondCounter';

// function App() {
//   return (
//     <div> 
//       App
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 1,
      sum: false,
      mult: false,
      showSum: true
    }
    // this.multiply = this.multiply.bind(this);
    // this.plus = this.plus.bind(this);
    this.hideSum = this.hideSum.bind(this);
    this.multsum = this.multsum.bind(this)
  }
  multsum(action) {
    this.setState({
      count: action === 'sum' ? this.state.count + 1 : this.state.count * 10 ,
      [action]: !this.state[action]
      })
  }
  hideSum(bool){
    this.setState({showSum: bool})
  }

  render() {
    return (
     <div> 
        <div>{this.state.count}</div>
       
       <button onClick={() => this.setState({showSum: !this.state.showSum})}>Show + and -</button>
       <button onClick={this.multsum('mult')}>*</button>
       {/* <button onClick={() => this.setState({count: this.state.count / 10})}>/</button> */}
       <button onClick={this.multsum('sum')}>+</button>
       {/* <button onClick={() => this.setState({count: this.state.count -1})}>-</button> */}
       {this.state.showSum && <FirstComponent x={this.state.count} />}
       {this.state.mult && <SecondCounter y={this.state.count} hideSum={this.hideSum}/>}
     </div>
    )    
  }
}


export default App;
