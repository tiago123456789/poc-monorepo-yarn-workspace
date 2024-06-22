const logRequest = (req, res, next) => {
    console.log(req.method, req.url, req.query)
    next();
}

module.exports = {
    logRequest
}