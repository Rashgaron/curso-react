import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Todo from './todo'
import axios from 'axios'
const TodosList = () => {
  const [todos, saveTodos] = useState([])

  useEffect(() => {
    const componentDidMount = () => {
      axios
        .get('http://localhost:4000/todos')
        .then(response => {
          saveTodos(response.data)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    componentDidMount()
  }, [])
  return (
    <div>
      <h3>Todos List</h3>
      <table className='table table-stripped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(data => (
            <Todo todo={data} key={data._id}></Todo>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodosList
