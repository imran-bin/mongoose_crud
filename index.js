const express = require("express")
const mongoose = require("mongoose")
const todoHandaler = require("./routerHandaler/todoHandaler")
const app = express()

app.use(express.json())

// database connection

mongoose.connect("mongodb://localhost:27017/todos")
    .then(()=>console.log("connection successfullay"))
    .catch((err)=>console.log(err))

function erroHandaler(err,req,res,next){
    if(res.headersSent){
        return next (err)

    }
    res.status(500).join({error:err})
}
app.use('/todo',todoHandaler)


app.get('/',(req,res)=>{
    res.send("ok")
})
app.listen(5000,()=>{
    console.log(("server is running 5000"));
})