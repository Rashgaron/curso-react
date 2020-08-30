import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://api.magicthegathering.io/v1/",
});
export default clienteAxios;
