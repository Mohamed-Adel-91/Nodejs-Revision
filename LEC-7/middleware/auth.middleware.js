const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const fullToken = req.headers.authorization; // Bearer <token></token>
        const token = fullToken?.split(" ")[1];
        // if (!token) throw new Error("You are not logged in!");
        // jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        //     if (err) throw new Error("Invalid Token!");
        //     req.decodedToken = decodedToken;
        //  });
        console.log(" Token  : ", token);
        next();
    } catch (err) {
        console.log("Error in verify token middleware: ", err);
        return res
            .status(401)
            .send({ auth: false, message: "Failed to authenticate token." });
    }
};
