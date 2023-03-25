import axios from "axios";
const ApiAmistApp = axios.create({
  baseURL: "https://amist.herbasingenieria.cl/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { ApiAmistApp };
