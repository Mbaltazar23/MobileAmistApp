import { Category } from "../../Domain/entities/Category";
import { createContext, useEffect, useState } from "react";
import { GetAllCategoryUseCase } from "../../Domain/useCases/category/GetAllCategory";

export interface CategoryContextProps {
  categories: Category[];
  getCategories(): Promise<void>;
}

export const CategoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

  const getCategories = async (): Promise<void> => {
    const result = await GetAllCategoryUseCase();
    setCategories(result);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
