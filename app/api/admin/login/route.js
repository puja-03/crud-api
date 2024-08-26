import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken";
import DbConnect from "@/app/config/DbConnect";
DbConnect();

export const POST = async(req) =>{
    let record =  await req.json();

    let {username,password} = record;

    try{
        const  admin = await Admin.findOne({username});

        if(!admin){
            return NextResponse.json({"msg":"Invalid username"},{status:400})
        }
        const validPassword = await bcrypt.compare(password,admin.password);
        if(!validPassword){
            return NextResponse.json({"msg":"Invalid username"},{status:400}) 
        }

        // if all ok then
        let tokenData ={
            id:admin._id,
            username:admin.username
        }
        let token = JWT.sign(tokenData,"mynameispuja",{expiresIn:"1h"})

        let response = NextResponse.json({"msg":"login succesfully",success:true})
        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response
    }
    catch(err){
        return NextResponse.json({"err":err.message})
    }
    
}