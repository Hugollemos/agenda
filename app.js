// Carregando módulos
  const express = require('express')
  const handlebars = require('express-handlebars')
  const bodyParser = require("body-parser")
  const app = express()
  const admin = require("./routes/admin")
  //const mongoose = require("mongoose")
//Configurações
  //body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
  //Handlebars
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
  // Mongoose
// Rotas
  app.use("/admin", admin)
// Outros
const PORT = 8081
app.listen(PORT,() => {
  console.log("Servidor rodando em http://localhost:8081")
})