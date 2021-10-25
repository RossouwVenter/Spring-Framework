import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent,{SecondComponent , ThirdComponent} from './components/learning-examples/FirstComponent';


class App extends Component{
  render(){
    return (
      <div className="App">
        My Hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        
      </div>
    )
  }
}

// Class Component


// class SecondComponent extends Component{
//   render(){
//     return (
//       <div className="secondComponent">
//         SecondComponent        
//       </div>
//     )
//   }
// }

// function ThirdComponent(){
//   return (
//     <div className="thirdComponent">
//       ThirdComponent        
//     </div>
//   )
// }




export default App;
