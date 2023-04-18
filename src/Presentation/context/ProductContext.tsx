import { createContext, useState } from "react";
import { Product } from "../../Domain/entities/Product";
import { GetProductsByCategoryUseCase } from "../../Domain/useCases/product/GetProductsByCategory";
import { GetProductsPurchaseByStudentUseCase } from "../../Domain/useCases/product/GetProductsPurchaseByStudent";

export interface ProductContextProps {
  products: Product[];
  productsPurchases: Product[];
  getProducts(id_category: string): Promise<void>;
  getProductsPurchaseByStudent(): Promise<void>;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsPurchases, setProductsPurchases] = useState<Product[]>([]);

  const getProducts = async (id_category: string): Promise<void> => {
    const result = await GetProductsByCategoryUseCase(id_category);
    setProducts(result);
  };

  const getProductsPurchaseByStudent = async (): Promise<void> => {
    const result = await GetProductsPurchaseByStudentUseCase();
    setProductsPurchases(result);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsPurchases,
        getProducts,
        getProductsPurchaseByStudent,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
