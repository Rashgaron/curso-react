import React, { useState, useEffect } from 'react'
import axios from 'axios'
const EditTodo = ({ match }) => {
  const [newTodo, saveNewTodo] = useState({
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  })



  useEffect(() => {
    const componentDidMount = () => {
      axios
        .get('http://localhost:4000/todos/' + match.params.id)
        .then(response => {
          console.log(match.params.id)
          saveNewTodo({
            todo_description: response.data.todo_description,
            todo_responsible: response.data.todo_responsible,
            todo_priority: response.data.todo_priority,
            todo_completed: response.data.todo_completed
          })
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    componentDidMount()
  }, [match.params.id])

  // console.log(match.params.id)

  return (
    <div>
      <p>Welcome to Edit Todo Component!!</p>
    </div>
  )
}

export default EditTodo
