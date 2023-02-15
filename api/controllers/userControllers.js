import { genRes } from "../utils/Response.js";

/** 
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

export const handleCreateUsers = async (req, res, next) => {
    console.log("REQUEST BODY: ", req.body);
    try {
        throw new Error("Working is kk");
    } catch (err) {
        console.log("Error in handleCreateUsers: ", err);
        return genRes(res, 500, false, err?.message ?? "Unknown Error in handleCreateUsers!");
    };
};