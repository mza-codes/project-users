import { prisma } from "../index.js";
import { genRes } from "../utils/Response.js";

/** 
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

export const handleCreateUsers = async (req, res, next) => {
    let usersArray = req.body?.results ?? [];

    if (!usersArray || usersArray?.length <= 0) {
        return genRes(res, 400, false, "No Bulk Users on Request!");
    };

    try {
        const users = await prisma.user.createMany({ data: usersArray });
        console.log("USERS Create RESPONSE: ", users);
        console.log("Total Users Added in DB: ", usersArray?.length);
        return genRes(res, 201, true, `${usersArray?.length ?? 0} Users Added to Database!`, { users });
    } catch (err) {
        console.log("Error in handleCreateUsers: ", err);
        return genRes(res, 500, false, err?.message ?? "Unknown Error in handleCreateUsers!");
    };
};

export const handleDeletion = async (req, res, next) => {
    try {
        const users = await prisma.user.deleteMany();
        console.log("USERS Delete RESPONSE: ", users);
        return genRes(res, 200, true, "All Users deleted from Database!", { users });
    } catch (err) {
        console.log("Error in handleDeletion: ", err);
        return genRes(res, 500, false, err?.message ?? "Unknown Error in handleDeletion!");
    };
};

export const getBulkUsers = async (req, res, next) => {
    try {
        const users = await prisma.user.findMany();
        console.log("USERS GET RESPONSE: ", users);
        if (users?.length <= 0) throw new Error("No Users Found in Database!");
        return genRes(res, 200, true, `Fetched ${users.length} Users from Database!`, { users });
    } catch (err) {
        console.log("Error in handleDeletion: ", err);
        return genRes(res, 500, false, err?.message ?? "Unknown Error in handleDeletion!");
    };
};