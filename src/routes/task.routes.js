//el metodo Router nos permite crear rutas
const router = require("express").Router();
const {getTask,postTask,putTask,deleteTask}=require("../controllers/task.controller")
//router.get("/",getTask)
//ruta para obtener todas las tareas
router.get("/task",getTask)
//crear nueva tarea
router.post("/task",postTask)
//editar tarea requiere id de tarea
router.put("/task",putTask)
//eliminar tarea
router.delete("/task",deleteTask)
// se exporta el objeto router que contiene todas las rutas
module.exports = router;
