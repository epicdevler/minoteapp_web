import * as Realm from 'realm-web'

export const db_connection = () => {
    return Realm.getApp(process.env.NEXT_PUBLIC_APP_ID)
}