import Todo from "../models/todo.js";
import store from "../store.js";


// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Eva/todos/",
  timeout: 8000
});

class TodoService {
  constructor() {
  }
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
      .then(res => {
        let todoList = res.data.data.map(t => new Todo(t))
        store.commit("todos", todoList)
        console.log(res.data) // get function is working!
      })
      .catch(err => console.error(err)) // error reading on console?
  }

  addTodoAsync(todo) {

    todoApi.post("", todo)
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todo.completed = !todo.completed
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo) //recent change incase it broke
      .then(res => {
        this.getTodos()
      })
      .catch(err => console.error(err))
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(() => {
        let filteredTodos = store.State.todos.filter(t => t._id != todoId);
        store.commit("todos", filteredTodos)
      })
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
