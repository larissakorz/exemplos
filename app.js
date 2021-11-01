const express = require("express");

const app = express();

// // Especificar pasta com arquivo CSS e Imagens
app.use(express.static(__dirname + '/publico'));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/pagina/inicio.html");
});

app.get("/sobre", function(req, res){
  res.sendFile(__dirname + "/pagina/sobre.html");
});

app.listen(8081, function(){
  console.log("Servidor funcionando na porta 8081");
});