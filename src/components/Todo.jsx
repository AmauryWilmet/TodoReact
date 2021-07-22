import React from "react";

import "../styles.css";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = { task: ["Test"], textInput: "" };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addTask() {
    let newTask = this.state.task;
    newTask.push(this.state.textInput);
    this.setState({ task: newTask });
  }

  handleChange(event) {
    this.setState({ textInput: event.target.value });
  }

  deleteItem(event) {
    let newTask = this.state.task;
    let nameTask = event.target.getAttribute("value");
    let indexOfTheElementAtDelete = newTask.indexOf(nameTask);
    newTask.splice(indexOfTheElementAtDelete, 1);
    this.setState({ task: newTask });
  }

  render() {
    return (
      <div id="container-todo" className="container m-5 pt-3 text-center">
        <h1>TO-DO List</h1>
        <div id="div-input">
          <button onClick={this.addTask} className="btn btn-outline-dark">
            Add
          </button>
          <input onChange={this.handleChange} />
        </div>
        <ul>
          {this.state.task.map((task) => (
            <li onClick={this.deleteItem} value={task}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
