import ENV from "./validateEnv.js";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

export const userCookie = "_ga_user_sess";
export const adminCookie = `_sa_admin`;

export const cookieConfig = {
    path: "/",
    expires: new Date(Date.now() + (1000 * 60) * 12),
    httpOnly: true,
    sameSite: ENV.SAME_SITE ?? "lax",
    // secure: false
};

export const createAccessToken = (data) => {
    const newToken = jwt.sign(data, ENV.JWT_KEY, { expiresIn: "5m" });
    return newToken;
};

export const CSRFKey = (id) => `${id}_csrf`;
export const genCSRFToken = () => uuid();