import { ProductRepositoryImp } from "../../../Data/repositories/ProductRepository";

const { getProductsPurchaseByStudent } = new ProductRepositoryImp();

export const GetProductsPurchaseByStudentUseCase = async () => {
  return await getProductsPurchaseByStudent();
};
