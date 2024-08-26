import mongoose from "mongoose"

const RecordSchema = new  mongoose.Schema({
  name :{type:String,required:true},
  contact :{type:String,required:true}, 
  city:{type:String,required:true},
  email:{type:String,required:true}
})

export default mongoose.models.Record || mongoose.model("Record",RecordSchema)