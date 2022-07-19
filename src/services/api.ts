import axios from "axios";

const api = axios.create({
  baseURL: "https://manager-portfolio-api.herokuapp.com/api/"
})

export default api
