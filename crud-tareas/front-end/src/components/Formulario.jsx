import React from 'react'
import { Form, Button } from 'react-bootstrap'
const Formulario = () => {
  return (
    <Form >
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Nombre Tarea:</Form.Label>
        <Form.Control type='email' placeholder='Escribe el nombre' />
      </Form.Group>

      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Descripción</Form.Label>
        <Form.Control as='textarea' rows='3' />
      </Form.Group>
    
      <Button variant='primary' type='submit'>
        Subir
      </Button>
    </Form>
  )
}

export default Formulario
