import { AxiosError } from "axios";
import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ApiAmistApp } from "../sources/remote/api/ApiAmistApp";
import { ResponseApiAmistApp } from "../sources/remote/models/ResponseApiAmistApp";

export class ProductRepositoryImp implements ProductRepository {
  async getProductsByCategory(category_id: string): Promise<Product[]> {
    try {
      const response = await ApiAmistApp.get<Product[]>(
        `/student/catalog/cats/${category_id}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiAmistApp = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve([]);
    }
  }

  async getProductsPurchaseByStudent(): Promise<Product[]> {
    try {
      const response = await ApiAmistApp.get<Product[]>(
        "/student/catalog/alum"
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiAmistApp = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve([]);
    }
  }
}
