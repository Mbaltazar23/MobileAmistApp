import { ResponseApiAmistApp } from "../../Data/sources/remote/models/ResponseApiAmistApp";
import { User } from "../entities/User";

export interface UserRepository {
  update(user: User): Promise<ResponseApiAmistApp>;
  getStudentsForTeacherAsigned(): Promise<User[]>
}
