import { Product } from "../entities/Product";

export interface ProductRepository {

    getProductsByCategory(category_id:string): Promise<Product[]>
    getProductsPurchaseByStudent(): Promise<Product[]>
}