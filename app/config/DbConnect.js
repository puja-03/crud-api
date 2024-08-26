import mongoose from "mongoose";
const DbConnect=()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/records");
    }
    catch(e){
        throw new Error ("DataBase connection fail")
    }
}
export default DbConnect;