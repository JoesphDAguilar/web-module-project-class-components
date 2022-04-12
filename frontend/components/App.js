import React from 'react'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: this.task,
      id: this.id,
      completed: false
    }
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <ul>
          <li>Walk the dog</li>
          <li>Learn React</li>
          <li>Have Fun</li>
        </ul>

        <form>
          <input />
          <button>Add to list</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
