import { prisma } from "../index.js";
import { genRes } from "../utils/Response.js";

/** 
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

export const handleCreateUsers = async (req, res, next) => {
    let usersArray = req.body?.results ?? [];
    console.log("ARRAY: ", usersArray?.length);

    if (!usersArray || usersArray?.length <= 0) {
        return genRes(res, 400, false, "No Bulk Users on Request!");
    };

    try {
        await prisma.$connect();
        const users = await prisma.user.findMany();
        console.log("USERS QUER", users);
        return genRes(res, 200, true, "Data Added yo Server!", { users });
    } catch (err) {
        console.log("Error in handleCreateUsers: ", err);
        return genRes(res, 500, false, err?.message ?? "Unknown Error in handleCreateUsers!");
    };
};