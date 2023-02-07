import React, { Component } from "react";
import "./App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    const newTodo = {
      text: this.state.inputValue,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: "",
    });
  };

  handleDeleteTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="todo-list">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeHolder="新增待辦事項"
        />
        <button onClick={this.handleAddTodo} className="add-btn">新增</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button onClick={() => this.handleDeleteTodo(index)}>
                ✔️
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
