import axios from 'axios'

export const fetchClientes = async() => await axios.get("https://barberiag372021.herokuapp.com/")
export const fetchBarberos = () => axios.get("https://barberiag372021.herokuapp.com/barberos")
export const fetchCitas = () => axios.get("https://barberiag372021.herokuapp.com/getcitas")

