const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const fullToken = req.headers.authorization; // Bearer <token></token>
        const token = fullToken?.split(" ")[1];
        if (!token) throw new Error("You are not logged in!");
        const decodedToken = jwt.verify(token, "secrets-is-here");
        req.user = decodedToken;
        // jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        //     if (err) throw new Error("Invalid Token!");
        //     req.decodedToken = decodedToken;
        //  });
        console.log(" Token  :  ", token);
        console.log("decodedToken : ", decodedToken);

        next();
    } catch (err) {
        console.log("Error in verify token middleware: ", err.message);
        return res
            .status(401)
            .send({ auth: false, message: "Failed to authenticate token." });
    }
};
