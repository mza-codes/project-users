export default function asyncHandler(controller) {
    return (req, res, next) => {
        Promise.resolve(controller(req, res, next)).catch(next)
    };
};