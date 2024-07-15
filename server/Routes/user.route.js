import { Router } from "express";
const router = Router()
import User from "../model/User.model.js"
import jwttoken from "jsonwebtoken"

router.route("/signin").post(async(req,res)=>{
    try {
        const {username, password} = req.body;

        const userExisted = await User.findOne({username})

        if(!userExisted || password !== userExisted.password){
            return res.status(404).json({"message" : "Wrong Credentials"})
        }
        
        const token = jwttoken.sign({id: userExisted._id}, process.env.SECRET_KEY)
        // console.log(token);
        const options= {
            httpOnly: true,
            secure: true
        }

        return res.status(202).cookie("access_token",token,options).json({"message" : "Login Successfully"})
        } catch (error) {
        console.log(error);
    }
})


export default router