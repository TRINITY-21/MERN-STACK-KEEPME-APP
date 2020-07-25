const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    //Get Token from Header
    const token = req.header("x-auth-token");

    //Check if not token
    if (!token) {
        return res.status(401).json({ msg: "Authorization denied, No Token to verify" });
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token" });
    }
};
