import axios from "axios";
import { User } from "../../../../Domain/entities/User";
import { LocalStorage } from "../../local/LocalStorage";

const ApiAmistApp = axios.create({
  baseURL: "https://amist.herbasingenieria.cl/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiAmistAppWithImage = axios.create({
  baseURL: "https://amist.herbasingenieria.cl/api",
  headers: {
    "Content-type": "multipart/form-data",
    accept: "application/json",
  },
});


// INTERCEPTORS
ApiAmistApp.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data as any);
    config.headers!["Authorization"] = user?.token;
  }
  return config;
});

ApiAmistAppWithImage.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data as any);
    config.headers!["Authorization"] = user?.token;
  }
  return config;
});
export { ApiAmistApp, ApiAmistAppWithImage };
