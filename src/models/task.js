const {model,Schema}= require(`mongoose`)//de libreria mongoose traigo model,schema
const taskSchema = new Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdescription:{
        type:String,
            },
    taskisdone:{
        type:Boolean,
        default:false
    }}, {
        versionKey: false,
        timestamps: true
    });
    module.exports=model(`tasks`, taskSchema);