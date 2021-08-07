const fs =require("fs");

const http =require("http");
//const { fulkoli, bulbuli, ipqyee } = require("./func");

const {fulkoli,bulbuli,ipqyee}=require("./func");


//const server =require("server");

const server =http.createServer(function(req,res){
    res.setHeader("Content-type","application/json")
    res.setHeader("Access-Control-Allow-Origin","*")
    res.writeHead(200)
    
    //fulkoli();
  let temp=fulkoli(6,6);
  datatemp=JSON.stringify(temp)

    let dataObj={id:123, name:"Shahed",email:"shahed@reachbd.com"}
    data=JSON.stringify(dataObj)
    res.end(datatemp)
});

server.listen(1234,function(){

    console.log("I am a web server and listing you")

})