// Carregando módulos
  const express = require('express')
  const handlebars = require('express-handlebars')
  const app = express()
  const admin = require("./routes/admin")
  //const mongoose = require("mongoose")
//Configurações
  //body Parser
  app.use(express.json());
  app.use(express.urlencoded({extended:true}))
  //Handlebars
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
  // Mongoose
// Rotas
  app.get('/', (req, res) => {
    res.send('Rota principal')
  })

  app.get('/posts', (req, res) => {
    res.send("lista Posts")
  })

  app.use('/admin', admin)
// Outros
const PORT = 8081
app.listen(PORT,() => {
  console.log("Servidor rodando em http://localhost:8081")
})