const Task = require("../models/task");
const ctrlTask={};
//controlador para obtener todas las tareas de la base de datos
ctrlTask.getTask = async (req,res)=>{
    // consultan todos los documentos de la BD
    const tasks = await Task.find();

//se devuelve al cliente un arreglo con todos los datos de las tareas
return res.json(tasks)
};
//controlador para crear nuevo tarea en la BD
ctrlTask.postTask = async(req,res)=>{
    // se obtienen los datos enviados por el metodo POST
    const {taskname, taskdescription,taskisdone} = req.body;
    //se instancia un nuevo documento MongoDB para luego guardarlo
    const newTask = new Task({
        taskname,
        taskdescription,
        taskisdone
    });
    //se almacena en la BD con metodo asincrono .save
const task = await newTask.save()
//se devuelve una respuesta al cliente con un mensaje y los datos de la tarea  creada
return res.json ({
    msg:"tarea creada correctamente",
    task
})
}
// Controlador para actualizar una tarea, requiere que se envíe ID  de la tarea.
ctrlTask.putTask = async(req,res)=>{
   return res.json ({
       msg:"La tarea  a sido actualizado con exito"
   })
};
//controlador para eliminar tarea requiere ID de la tarea
ctrlTask.deleteTask = async(req,res)=>{
    return res.json({
        msg:" La tarea fue eliminado con exito"
    })
}
module.exports=ctrlTask;