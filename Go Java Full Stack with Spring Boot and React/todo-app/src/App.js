import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/Counter/Counter';



class App extends Component{
  render(){
    return (
      <div className="App">
        <Counter></Counter>          
      </div>
    )
  }
}





// class LearningComponent extends Component{
//   render(){
//     return (
//       <div className="LearningComponents">
//         My Hello world
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
        
//       </div>
//     )
//   }
// }



export default App;
