import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { login } = new AuthRepositoryImpl();

export const LoginAuthUseCase = async (dni: string, password: string) => {
  return await login(dni, password);
};
