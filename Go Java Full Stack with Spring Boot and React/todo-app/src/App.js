import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="App">
        My Hello world
        <FirstComponent ></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
      </div>
    )
  }
}

// Class Component
class FirstComponent extends Component{
  render(){
    return (
      <div className="firstComponent">
        FirstComponent        
      </div>
    )
  }
}

class SecondComponent extends Component{
  render(){
    return (
      <div className="secondComponent">
        SecondComponent        
      </div>
    )
  }
}

function ThirdComponent(){
  return (
    <div className="thirdComponent">
      ThirdComponent        
    </div>
  )
}

function FourthComponent(){
  return (
    <div className="fourthComponent">
      FourthComponent        
    </div>
  )
}


export default App;
