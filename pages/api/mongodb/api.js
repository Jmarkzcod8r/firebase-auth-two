import axios from "axios";

// I guess this might as well come as a template
const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default api;
