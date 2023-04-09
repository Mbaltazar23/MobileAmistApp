import { ResponseApiAmistApp } from "../../Data/sources/remote/models/ResponseApiAmistApp";

export interface AuthRepository{

    login(dni:string, password:string): Promise<ResponseApiAmistApp>

    resetPasswordEmail(email: string) : Promise<ResponseApiAmistApp>

    changePassword(email: string, password: string) : Promise<ResponseApiAmistApp>
}