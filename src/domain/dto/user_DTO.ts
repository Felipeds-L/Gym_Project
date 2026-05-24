export interface userDTO{
    id: string,
    name: string,
    email: string,
    username: string,
    birth_date: Date,
    created_at: Date,
    updated_at: Date
}

export interface createUserDTO{
    name: string,
    email: string,
    password: string,
    username: string,
    birth_date: Date
}

export interface updateUserDTO{
    id: string,
    name?: string,
    email?: string,
    password?: string,
    username?: string,
    birth_date?: Date
}