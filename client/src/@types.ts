export interface DBUser {
    _id: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    password: string;
    name: string;
    verified: boolean;
    dob: string;
    place: string;
    lang: string;
    username: string;
    image_url: string | null;
    mobile: number | null;
}

export interface DBUserAdmin {
    _id: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    password: string;
    isAdmin: boolean;
    verified: boolean;
}
