import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    description : String,
    startDate : Date,
    endDate : Date,
    team : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    }]
});

const project = mongoose.model('Project',projectSchema);

export default project;

