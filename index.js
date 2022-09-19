const path=require("path");
const express = require("express");
const cors=require("cors");
const morgan=require("morgan");
const dbConnect=require("./src/db/connection.js")
//INICIALIZACIONES
const app = express();
dbConnect();//INICIALIZA LA CONECCIÓN A LA BASE DE DATOS
//CONFIGURACIONES
const port =process.env.PORT ||3000;
//MIDDLEWARES
app.use(cors());
app.use(morgan(`dev`))
app.use(express.json())//servidor entienda json
//directorios de archivos estaticos
app.use(express.static(path.join(__dirname,"scr/public")));
//IMPORTAR RUTAS
app.use(require("./src/routes/task.routes"))
//configuracion de puertos
app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})