import { AxiosError } from "axios";
import { ActionRepository } from "../../Domain/repositories/ActionRepository";
import { Action } from "../../Domain/entities/Action";
import { ApiAmistApp } from "../sources/remote/api/ApiAmistApp";

export class ActionRepositoryImpl implements ActionRepository {
  async getAllActions(): Promise<Action[]> {
    try {
      const response = await ApiAmistApp.get<Action[]>("/select/actions");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
}
