import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config('request.baseUrl'),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default api;
