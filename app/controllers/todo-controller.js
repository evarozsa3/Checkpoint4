import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  let template = ''
  todos.forEach(t => {
    if (t.completed == true) {
      template += `<strike>${t.todoTemplate}</strike>`
    } else {
      template += t.todoTemplate
    }
  })
  document.getElementById("todos").innerHTML = template
  document.getElementById("count").innerHTML = `<p> ${todos.length} to do</p>`

}

export default class TodoController {
  constructor() {
    console.log("todo controller is working")
    store.subscribe("todos", _drawTodos)
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let newTodo = {
      description: form.Description.value
      //TODO build the todo object from the data that comes into this method
    };
    TodoService.addTodoAsync(newTodo);
    form.reset()

  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
