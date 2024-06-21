'use client'
import { Auth } from "@/core/datasource/auth/auth"
import { User } from "@/core/datasource/users/user"
import { db_connection } from "@/core/db_connection"
import { useColorMode } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserState } from "realm-web"

export const useHandleAuth = () => {

    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    
    useEffect(() => {
        const _user = new User().getCurrentUser()

        if(_user == null){
        if(colorMode === "dark")
            router.replace('/auth/login')
        }

    }, [])


}

const useUser = () => {
    const [user, setUser] = useState<UserModel | false>(false)

    useEffect(() => {
        const _user = new User().getCurrentUser()
        
        if(_user != null && _user.state == UserState.Active){
            setUser(
                {
                    email: _user.profile.email,
                    firstName: _user.profile.firstName,
                    lastName: _user.profile.lastName,
                    imgUrl: _user.profile.pictureUrl
                }
            )
        }
    

    }, [])


}


type UserModel = {
    email: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    imgUrl: string | undefined,
}