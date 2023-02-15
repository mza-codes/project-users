/** 
 * @param {import("express").Response} res
 * @param {Number} code
 * @param {Boolean} success
 * @param {String} msg
 * @param {{Object}} payload
 */

export const genRes = (res, code, success, msg, payload) => {
    if (!res || !code) throw new Error("Error in genRes: res, code must be Valid!");
    return res.status(code).json(genBody(success, msg, payload));
};

function genBody(success = false, msg = "", payload = {}) {
    return {
        success,
        message: msg,
        ...payload
    };
};