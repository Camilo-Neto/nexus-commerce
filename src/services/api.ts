import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,

})


export const getBurguers = () => api.get('/burguers')
export const getDrinks = () => api.get('/Drinks')


export default api
