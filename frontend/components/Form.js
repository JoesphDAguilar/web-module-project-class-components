import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder='Enter new task'/>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
