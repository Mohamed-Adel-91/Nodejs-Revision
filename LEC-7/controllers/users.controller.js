const UserModel = require("../models/users.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc    Register a new user

exports.register = async function (req, res) {
    try {
        let newUser = new UserModel(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        newUser.password = hashedPassword;
        let user = await newUser.save();
        if (!user)
            return res
                .status(400)
                .send({ status: "fail", message: "Registration failed!" });
        return res.status(201).json({
            message: "Successfully created user",
            userCreated: { username: user.username, email: user.email },
        });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

// @desc    Login an existing user

exports.login = async function (req, res) {
    try {
        let user = await UserModel.findOne({
            email: req.body.email,
        });
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!user || !isMatch) {
            return req
                .status(401)
                .send({ message: "invalid Email or Password" });
        }
        // Create and assign a token for the user
        const token = jwt.sign(
            {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            "secrets-is-here"
        );
        res.header("auth-token", token).send({
            message: `Logged in as ${user.username}!`,
            username: user.username,
            email: user.email,
            token: token,
        });
    } catch (err) {
        return res.status(400).json({
            message: "An error occurred during login.",
        });
    }
};
