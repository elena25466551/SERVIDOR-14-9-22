const res = require("express/lib/response")

const ctrlHome = {}
 ctrlHome.getHome=((req,res)=>{
    res.send({
mensaje:"Petición GET para mostrar"
    })
})
ctrlHome.postHome =((req,res)=>{
    //console.log(req.body)
    res.send({
        mensaje:"Petición POST enviar"
    })
})
ctrlHome.putHome=((req,res)=>{
    res.json({
        mensaje:"Peticion PUT que actualiza"
    })
})
ctrlHome.deleteHome=((req,res)=>{
    res.json({
        mensaje:"petición DELETE borra"
    })
})
module.exports = ctrlHome;