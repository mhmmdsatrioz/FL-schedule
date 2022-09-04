import axios from "axios";

const HTTP = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const API = {
  HTTP
};

export default API;
