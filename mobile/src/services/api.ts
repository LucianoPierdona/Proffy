import axios from "axios";

// Connection with the backend
const api = axios.create({
  baseURL: "http://192.168.0.103:3001",
});

export default api;
