const jwt = require("jsonwebtoken");
const User = require('../model/User');
const bcrypt = require('bcrypt');
const error = require('../tools/error');

const createToken = (id) => {  return jwt.sign({ id }, "little secret", { expiresIn: 60 * 60000 })};
const correctPassword = async ( typedPassword, originalPassword ) => { return await bcrypt.compare(typedPassword, originalPassword)};


const signup = async (req, res, next) => {
    try {
        let password = req.body.password;
        let hashMe = await bcrypt.hash(password, 10)

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashMe,
            nationality: req.body.nationality,
            organisation: req.body.organisation
        })
        const token = createToken(user.id);
        res.status(201).json({
            status: "success",
            token,
            data: {
              user
            }
        })
    } catch (err) {
        next(err)
    }
}


const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            console.log("im here")
            return next( error(404,"fail","Missing Email or Password"), req, res, next);
        }
        const user = await User.findOne({ email }).select("+password");
        if (!user || !(await correctPassword(password, user.password))) {
            return next(error(401, "fail", "Email or Password is wrong"), req, res, next)
        }
        const token = createToken(user.id)
        res.status(200).json({
        status: "success",
        token,
        data: {
            user
        }
    });
    } catch (err) {
        next(err)
    }
}

const Protect = async (req, res, next) => {
    try {
        let token
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
          token = req.headers.authorization.split(" ")[1];
        }
        if (!token) { return next(error( 401, "fail", "You are not logged in! Please login in to continue"), req, res, next)}

        // 2) Verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // 3) check if the user exists
        const user = await User.findById(decode.id);
        
        if (!user) { return next(error(401, "fail", "This user is no longer exist"), req, res, next)}
        req.user = user;
        next();
    } catch (err) {
        next(err)
    }
}

// Authorization check if the user have rights to do this action
const restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(error(403, "fail", "You are not allowed to do this action"), req, res, next);
      }
      next();
    };
};
module.exports = { login, signup, Protect, restrictTo }