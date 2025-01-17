import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Walk The Dog',
          id: 1152881705643,
          completed: false
        },
        {
          name: 'Learn React',
          id: 1152881703455,
          completed: false,
        },
        {
          name: 'Have Fun',
          id: 1152881709347,
          completed: false,
        }
      ]
    }
  }

  onSubmit = (task) => {

    const newTodo = {
      name: task,
      id: 120323040,
      completed: false
    }

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    })
  }
  
  clearComplete = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(todo => {
        return(todo.completed === false);
      })
    })
  }

  onToggle = (clickedId) => {

    this.setState({
      ...this.state,
      todo: this.state.todo.map(todo => {
        if(todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,

          }
        }
        return todo
      })
    })
  }

  render() {
    const { todo } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList onToggle={this.onToggle} todo={todo}/>
        <Form onSubmit={this.onSubmit} />
        <button onClick={this.clearComplete}>Clear</button>
      </div>
    )
  }
}
