import React, { useState } from 'react'
import axios from 'axios'
const CreateTodo = () => {
  const [create, SaveCreate] = useState({
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  })
  const [error, guardarError] = useState(false)

  const {
    todo_description,
    todo_responsible,
    todo_priority,
    todo_completed
  } = create
  const handleChange = e => {
    SaveCreate({
      ...create,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (
      todo_description.trim() === '' ||
      todo_responsible.trim() === '' ||
      todo_priority.trim() === ''
    ) {
      guardarError(true)
      return
    }
    guardarError(false)
    axios
      .post('http://localhost:4000/todos/add', create)
      .then(res => console.log(res.data))

    // fetch('http://localhost:4000/todos/add',{
    //   method:'post',
    //   body:create,
    // }).then(function(response){
    //   return response.json();
    // })
    SaveCreate({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }
  return (
    <div style={{ marginTop: 10 }}>
      {error ? (
        <div className='alert alert-danger' role='alert'>
          Todos los campos son obligatorios
        </div>
      ) : null}
      <h3>Create New Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Description:</label>
          <input
            type='text'
            className='form-control'
            value={todo_description}
            onChange={handleChange}
            name='todo_description'
          ></input>
        </div>
        <div className='form-group'>
          <label>Responsible:</label>
          <input
            type='text'
            className='form-control'
            value={todo_responsible}
            onChange={handleChange}
            name='todo_responsible'
          ></input>
        </div>
        <div className='form-group'>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='todo_priority'
              id='priorityLow'
              value='Low'
              onChange={handleChange}
            />
            <label className='form-check-label'>Low</label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='todo_priority'
              id='priorityMedium'
              value='Medium'
              onChange={handleChange}
            />
            <label className='form-check-label'>Medium</label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='todo_priority'
              id='priorityHigh'
              value='High'
              onChange={handleChange}
            />
            <label className='form-check-label'>High</label>
          </div>
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create Todo'
            className='btn btn-primary'
          ></input>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo
