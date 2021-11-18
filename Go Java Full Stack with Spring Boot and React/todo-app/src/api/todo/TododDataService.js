import axios from "axios"

class TodoDataService {
    retrieveAllTodos(name) {
        // console.log('executed service')
        axios.get(`http://localhost:8080/yusers/${name}/todos`)
    }

    retrieveTodo(name, id) {
        // console.log('executed service')
        axios.get(`http://localhost:8080/yusers/${name}/todos/${id}`)
    }

    deleteTodos(name, id) {
        // console.log('executed service')
        axios.delete(`http://localhost:8080/yusers/${name}/todos/${id}`)
    }
}

export default new TodoDataService