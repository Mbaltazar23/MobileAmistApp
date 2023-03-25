import { Rol } from "./Rol";

export interface User {
  id?: string;
  dni: string;
  name: string;
  email: string;
  phone: string;
  points: string;
  password: string;
  address: string;
  status: string;
  token?: string;
  roles: Rol[]
}
