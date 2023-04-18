import { AxiosError } from "axios";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ApiAmistApp } from "../sources/remote/api/ApiAmistApp";
import { Category } from "../../Domain/entities/Category";

export class CategoryRepositoryImpl implements CategoryRepository {
    
  async getAll(): Promise<Category[]> {
    try {
      const response = await ApiAmistApp.get<Category[]>(
        "/student/catalog/cats"
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
}
