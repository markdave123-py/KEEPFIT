import { ADMIN } from "src/models/admin";

class AdminService{
    addAdminToDb = async () =>{

        const allAdmin = await ADMIN.countDocuments()

        if ( allAdmin === 0){
            
        }
    }
}