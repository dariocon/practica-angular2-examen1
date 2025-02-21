export interface PersonLogin {
    user: string,
    password: string
}

export interface PersonLoginResponse {
    mensaje: string,
    user:  {user: string, rol: string}
}

export interface PersonLogin {
    user: string,
    password: string
}
export interface User {
    user:string,
    password:string,
    rol: string
}

export interface UserResponse {
    id: string,
    user:string,
    rol: string
}