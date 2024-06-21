import { db_connection } from "@/core/db_connection";

export class User{

    currentUser = db_connection().currentUser

    getCurrentUser(){ return this.currentUser}


}