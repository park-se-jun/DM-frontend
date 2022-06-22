import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_SPRING_SERVER + "/api",
  headers: {
    "Content-type": "application/json"
  }
});