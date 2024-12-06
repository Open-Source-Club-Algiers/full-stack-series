export const verifyToken = (req, res, next) => {
    // retrieve the token from the cookie
    const token = req.cookies.token;
    // verify the token
    try {
        jwt.verify(token, process.env.SECRET_KEY,)

        next()

    }
    catch {
        req.status(403).json({ message: "Invalid token you are not allowed to access this ressource" })
    }
}