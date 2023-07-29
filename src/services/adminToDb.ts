import { ADMIN } from "../models/admin";
import { defaultAdmin } from "./defaultAdim";

export class AdminService{

    static addAdminToDb = async () =>{

        const allAdmin = await ADMIN.countDocuments()

        if (allAdmin === 0){

          const admin = await  ADMIN.create(defaultAdmin);
          console.log(admin);
            
        }
    }
}