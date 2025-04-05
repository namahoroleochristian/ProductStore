import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export const tokenVerifier = ( req,res,next) => {
        const token = req.cookies.jwt
        if (!token) {
            res.status(401).json({success:false,message:'access denied'})
        }
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded) => {
            if (err) {
                res.status(403).json({success:false,message:'forbiden '})
            }

            req.user = decoded
            next()
        })

}