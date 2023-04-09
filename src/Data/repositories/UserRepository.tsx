import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ApiAmistApp } from "../sources/remote/api/ApiAmistApp";
import { ResponseApiAmistApp } from "../sources/remote/models/ResponseApiAmistApp";

export class UserRepositoryImp implements UserRepository {

  async update(user: User): Promise<ResponseApiAmistApp> {
    try {
      const response = await ApiAmistApp.post<ResponseApiAmistApp>(
        "/putUser",
        user
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
  
}
