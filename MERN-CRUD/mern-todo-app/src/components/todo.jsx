import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Todo = ({ todo }) => {
  const [deleted, saveDeleted] = useState(false)
  const url = '/edit/' + todo._id
  const deleteTodo = () => {
    const componentDidMount = () => {
      axios
        .post('http://localhost:4000/todos/delete/' + todo._id)
        .then(console.log('Eliminado con éxito'))
        .catch(function (err) {
          console.log(err)
        })
    }
    saveDeleted(true)
    componentDidMount()
  }
  return (
    <Fragment>
      {deleted ? null : (
        <tr>
          <td>{todo.todo_description}</td>
          <td>{todo.todo_responsible}</td>
          <td>{todo.todo_priority}</td>
          <td>
            <Link to={{ pathname: url }}>Edit</Link>
          </td>
          <td>
            <button onClick={deleteTodo}>Delete</button>
          </td>
        </tr>
      )}
    </Fragment>
  )
}

export default Todo
