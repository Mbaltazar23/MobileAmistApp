import { ResponseAPIAmistApp } from "../../Data/sources/remote/models/ResponseApiAmistApp";

export interface AuthRepository{

    login(dni:string, password:string): Promise<ResponseAPIAmistApp>

    resetPasswordEmail(email: string) : Promise<ResponseAPIAmistApp>

    changePassword(email: string, password: string) : Promise<ResponseAPIAmistApp>
}