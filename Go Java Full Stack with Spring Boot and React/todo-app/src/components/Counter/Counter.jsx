import React, { Component } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import './Counter.css'

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)

    }

    render(){
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.increment}/> 
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.increment}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.increment}/>     
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Reset</button></div>
          </div>
        )
      }

      reset(){
        this.setState(
            (prevState) => {
            return {counter : 0}
        })
      }

    
    increment(by){ 
        // console.log(`increment from parent - ${by}`)
        
        this.setState(
            (prevState) => {
            return {counter : this.state.counter + by}
        })
    }

    decrement(by){ 
        // console.log(`increment from parent - ${by}`)
        
        this.setState(
            (prevState) => {
            return {counter : this.state.counter - by}
        })
    }
}

class CounterButton extends Component{

    // Define the initl state in a constructor
    // state => counter 0

    constructor(){
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render  ()  {
        let style = {fontSize : "50px", padding : "15px 30px"}
        return (
            <div className= "counter">
               <button onClick= {this.increment}>+{this.props.by}</button>
               <button onClick= {this.decrement}>-{this.props.by}</button>
               <span className="count"
               style = {style}
               >{this.state.counter}</span>
            </div>
        )
    }

    increment(){ // update state - counter ++
        // console.log('increment')
        this.state.counter++;
        this.setState(
            (prevState) => {
            return {counter : prevState.counter + this.props.by}
        });

        this.props.incrementMethod();
    }

    decrement(){ // update state - counter ++
        // console.log('increment')
        this.state.counter++;
        this.setState(
            (prevState) => {
            return {counter : prevState.counter - this.props.by}
        });

        this.props.decrementMethod();
    }
    
}
CounterButton.defaultProps = {
    by :1
}

CounterButton.propType = {
 by : propTypes.number
}



export default Counter

