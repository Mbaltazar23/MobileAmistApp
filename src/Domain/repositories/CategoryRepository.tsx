import { Category } from "../entities/Category";

export interface CategoryRepository {
  getAll(): Promise<Category[]>;
}
