const express = require("express")
var app = require("express")()
var server = require("http").Server(app)
var io=require("socket.io")
//const { socket } = require("dgram")

app.use(express.static("public"))
server.listen(3000,()=>console.log("servidor iniciado en 3000"))

app.get("/", function(req,res){
    res.sendFile(__dirname+"/public/index.html")
});

io.on("connection",function(req,res){
    console.log("socket conectado",socket.id)
    io.emit("comectado",{texto:"nuevo socket conectado: "+socket.id+"<br>"})

    socket.on("disconnect",()=>{
        console.log("socket desconectado",socket.id)
        io.emit("desconectado",{texto:"nuevo socket conectado: "+socket.id+"<br>"})
    })
});