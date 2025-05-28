import jwt from "jsonwebtoken";

class jwtConfig {
    createToken(payload){
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: '24h'
        })
        return token
    }
}
export default new jwtConfig()