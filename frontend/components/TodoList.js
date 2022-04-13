import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render () {
    return (
      <ul>
          {
            this.props.todo.map(todo => {
              return(<Todo onToggle={this.props.onToggle}  todo={todo} key={todo.id}/>)
            })
          }
        </ul>
    )
  }
}
