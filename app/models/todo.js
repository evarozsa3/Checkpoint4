import store from "../store.js"
// export default class
// constructor within your export
//console log - we want data returned
// we need all the model data - id / user / description / completed items (this.user = data.user)
// now we need to create a template - <li></li>

export default class Todo {

  constructor(data) {
    console.log(data)
    this._id = data._id //auto generate
    this.user = data.user //Jake
    this.description = data.description // needs to take out trash
    this.completed = data.completed //not complete - boolean(true or false statement - its uses !) completed or !completed
  }

  get todoTemplate() {
    return `
    <p> <input ${this.completed ? 'checked' : ''} type="checkbox" id="completed" onclick="app.todoController.toggleTodoStatus('${this._id}')"> ${this.description} <i class="far fa-minus-square text-danger" onclick="app.todoController.removeTodo('${this._id}')"></i><p>
  `
  }
  get CountTemplate() {
    return `
   <h5>Tasks Remaining: ${store.State.todos.length}</h5>
    `
  }
}
//