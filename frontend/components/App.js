import React from 'react'
import Todo from './Todo';
import TodoList from './TodoList';


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
  render() {
    const { todo } = this.state;
    return (
      <div>
        <h1>Todo App</h1>

        <TodoList todo={todo}/>

        <form>
          <input placeholder='Enter new task'/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
