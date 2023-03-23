export interface DBUser {
    _id: string;
    email: string;
    password: string;
    name: string;
    verified: boolean;
    dob: string;
    place: string;
    lang: string;
    username: string;
}

export interface DBUserAdmin {
    _id: string;
    email: string;
    password: string;
    isAdmin: boolean;
    verified: boolean;
}
