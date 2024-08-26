
import DbConnect from "@/app/config/DbConnect";
import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

DbConnect()
export const POST = async(req)=>{
    let  record = await req.json();

    let {username,password} = record;

     ////salt
      let salt = await bcrypt.genSalt(10);
     let hashedPassword = await bcrypt.hash(password,salt)

    let data = new Admin({username,password:hashedPassword});
    try{
        data = await data.save();
        return NextResponse.json({"msg":"account is created successfully"})
    }
    catch(err){
        return NextResponse.json({"msg":"some thing went wrong","error":err.message}) 
    }

}