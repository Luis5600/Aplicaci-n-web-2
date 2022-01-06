module.exports = (err, req, res, next) => {
    const httpStatus = err.status || 500;
    const httpError = err.message || "Error no controlado!";

    return res.status(httpStatus).send({
        status: httpStatus,
        message: httpError
    });
}