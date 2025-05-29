import mongoose from "mongoose";

const shiftSchema = mongoose.Schema({
    name:{
        type:String,
        enum:['Morning','Evening','Night'],
        required  :true
    },
    
});

const shift = mongoose.model('Shift',shiftSchema);

export default shift;