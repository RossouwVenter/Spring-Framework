import React, { Component } from "react"
import TododDataService from "../../api/todo/TododDataService.js"
import AuthenticationService from "./AuthenticationService.js"

class ListTodosComponent extends Component {
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos : [],
            message : null
        }        
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentWillUnmount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true

    }

    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName
        TododDataService.retrieveAllTodos(username)
        .then(
            responsw => {
                // console.log('')
                this.setState({todos : response.data})
            }
        )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName
        // console.log(id + " " + username)
        TododDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState({message : `Delete of Todo ${id} successful`});
                this.refreshTodos()
            }
        )
    }

    updateTodoClicked(id){
        console.log('update')
        this.props.history.push(`/todos/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName
        // // console.log(id + " " + username)
        // TododDataService.deleteTodo(username,id)
        // .then(
        //     response => {
        //         this.setState({message : `Delete of Todo ${id} successful`});
        //         this.refreshTodos()
        //     }
        // )
    }

    
    render(){
        console.log('render')
        return (
            <div> 
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                todo => 
                                    <tr>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-success"onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning"onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )                       
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent