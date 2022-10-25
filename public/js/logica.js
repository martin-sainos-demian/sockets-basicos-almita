var socket=io.connect("http://localhost:3000")

var notificaciones=[]

socket.on("conectado",function(data){
    console.log(data)

    notificaciones.push(data)
    document.querySelector("#notificaciones").innerHTML=JSON.stringify(notificaciones)
})

socket.on("desconectado",function(data){
    console.log(data)

    notificaciones.push(data)
    document.querySelector("#notificaciones").innerHTML=JSON.stringify(notificaciones)
})