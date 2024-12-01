import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    coverImg:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    details:{
        type:String,
        require:true
    },
},
{
    timestamps:true   
})

const Service = mongoose.model('services',serviceSchema)
export default Service