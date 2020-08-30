import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: "https://api.scryfall.com/cards/",
});
export default clienteAxios;
