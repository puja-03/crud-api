import DbConnect from "@/app/config/DbConnect";
import Record from "@/app/models/Record";
import { NextResponse } from "next/server";

DbConnect();

export async function DELETE(req,{params}){
  let {id} = params;
  let data =  await Record.findByIdAndDelete(id);
  return NextResponse.json({data,"msg":"data delete successfully"})

}

export  async function PUT(request,{params}){
    let{id} = params;
    const  req = await request.json() 
    let data = await Record.findByIdAndUpdate(id,req)
    return NextResponse.json({data,"msg":"data update successfully"})
 }
 export  async function GET(request,{params}){
  let {id} = params;
  let data = await Record.findById(id);
  return NextResponse.json(data)
 }