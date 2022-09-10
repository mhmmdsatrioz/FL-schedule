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

const data = [
  {
    id: "1",
    nama: "john",
    umur: 19
  },
  {
    id: "2",
    nama: "adi",
    umur: 19
  }
];
