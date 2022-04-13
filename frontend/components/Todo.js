import React from "react";

export default class Todo extends React.Component {

  onClick = () => {
    this.props.onToggle(this.props.todo.id);
  }

  render() {
    return (
      <li onClick={this.onClick} key={this.props.todo.id}>
        {this.props.todo.name}
        {this.props.todo.completed ? <span>✔️</span> : <span></span>}
      </li>
    );
  }
}
