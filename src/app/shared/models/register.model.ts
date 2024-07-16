import { LoginModel } from "./login.model";

export interface RegisterModel extends LoginModel{
    name:string;
    password_confirmation:string;
}