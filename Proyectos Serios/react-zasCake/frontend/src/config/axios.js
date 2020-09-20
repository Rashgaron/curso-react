import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://zascake-backend.herokuapp.com/'
})

export default clienteAxios