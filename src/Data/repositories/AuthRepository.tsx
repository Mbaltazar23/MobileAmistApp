import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiAmistApp } from "../sources/remote/api/ApiAmistApp";
import { ResponseApiAmistApp } from "../sources/remote/models/ResponseApiAmistApp";

export class AuthRepositoryImpl implements AuthRepository {

  async login(dni: string, password: string): Promise<ResponseApiAmistApp> {
    try {
      const response = await ApiAmistApp.post<ResponseApiAmistApp>(
        "/login",
        {
          dni: dni,
          password: password,
        }
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiAmistApp = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
  
  async resetPasswordEmail(email: string): Promise<ResponseApiAmistApp> {
    try {
      const response = await ApiAmistApp.post<ResponseApiAmistApp>("/reset", {
        email: email,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiAmistApp = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async changePassword(email: string, password: string): Promise<ResponseApiAmistApp>{
    try {
      const response = await ApiAmistApp.post<ResponseApiAmistApp>("/resetPassword", {
        email: email,
        password01: password
      });
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiAmistApp = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
