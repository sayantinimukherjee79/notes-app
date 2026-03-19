const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "not found" })
        }

        const token = authHeader.split(" ")[1]

        console.log("token is here:", token)

        if (!token) {
            return res.status(401).json({ message: "Invalid token format" })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)


        req.user = decoded

        next();


    } catch (error) {
        console.log(error.message);
        return res.status(401).json({ message: "invalid token" })
    }
}

module.exports = authMiddleware