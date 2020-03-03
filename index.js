const express = require("express");

 

var app = express();

 

app.get("/timer",(request,reponse)=>{
    reponse.send("<html>"+timer()+"</html>")
})


app.listen(80);
console.log("server ready");