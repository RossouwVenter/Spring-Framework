import axios from "axios"

class TodoDataService {
    retrieveAllTodos(name) {
        // console.log('executed service')
        return axios.get(`http://localhost:8080/yusers/${name}/todos`);
    }

    retrieveTodo(name, id) {
        // console.log('executed service')
        return axios.get(`http://localhost:8080/yusers/${name}/todos/${id}`);
    }

    deleteTodos(name, id) {
        // console.log('executed service')
        return axios.delete(`http://localhost:8080/yusers/${name}/todos/${id}`);
    }

    updateTodos(name, id, todo) {
        // console.log('executed service')
        return axios.put(`http://localhost:8080/yusers/${name}/todos/${id}`, todo);
    }

    createTodos(name, todo) {
        // console.log('executed service')
        return axios.post(`http://localhost:8080/yusers/${name}/todos/`, todo);
    }
}

export default new TodoDataService