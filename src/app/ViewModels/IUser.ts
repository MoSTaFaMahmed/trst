import { DocumentReference } from "@angular/fire/compat/firestore";

export default interface IUser{
    Firstname?:string,
    Lastname?:string,
    Email?:string,
    password?:string,
    Phone?:string,
    IsSeller?:boolean,
    SellerStatus?:String
    Product?:[{Product_Id:DocumentReference}]

}