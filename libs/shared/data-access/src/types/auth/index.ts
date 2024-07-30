export interface User {
    id?: string;
    name: string;
    email: string;
    address: string;
}

export type LoginRequest = {
    email: string;
    password: string;
}

export type LoginResponse = {
    result: boolean;
    jwt: string;
    lastAccessTime: Date; 
}


