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
        Todo App
      </div>
    )
  }
}
