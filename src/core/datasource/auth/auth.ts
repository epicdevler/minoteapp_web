import { db_connection } from "@/core/db_connection";
import * as Realm from 'realm-web'

export class Auth{

    DB = db_connection()

    
    CURRENT_USER = this.DB.currentUser


    async login(email: string, password: string) {
        var cre = Realm.Credentials.emailPassword(email, password)


        return this.DB.logIn(cre, true)
        .then(data => {
            return {
                msg: "Success",
                isSuccess: true,
                debugInfo: data
            }
        })
        .catch(e => {
            return {
                msg: "Error",
                isSuccess: true,
                debugInfo: e
            }
        })

        
    }

    async registerEmail(email: string, password: string) {    
        this.DB.emailPasswordAuth.registerUser({email, password})
        .then(data => {
            return {
                msg: "Success",
                isSuccess: true,
                debugInfo: data
            }
        })
        .catch(e => {
            return {
                msg: "Error",
                isSuccess: true,
                debugInfo: e
            }
        })

    }

    logOut(){
        if(this.CURRENT_USER != null){
            this.CURRENT_USER.logOut()
        }
    }

}



interface MinoteResponse{
    msg: string,
    isSuccess: boolean,
    debugInfo?: any
}