export interface User {
    _id: string,
    name: string,
    email: string,
    admin: boolean,
    password: string,
    confirmed_password: string
}
