import axios from "axios"

class TodoDataService {
    retrieveAllTodos(name) {
        // console.log('executed service')
        axios.get(`http://localhost:8080/yusers/${name}/todos`)
    }
}

export default new TodoDataService