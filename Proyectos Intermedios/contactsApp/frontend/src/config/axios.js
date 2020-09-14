import axios from 'axios'

const clienteAxios = axios.create({
    // baseURL: 'http://localhost:4000/'
    baseURL:'https://contactsappproject.herokuapp.com/'
})

export default clienteAxios