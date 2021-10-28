// Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require("mongoose")
require("dotenv").config();

//Configurações
const URI = process.env.MONGODB_CONNECTION_STRING;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
// Mongoose

mongoose.connect(URI, {
}).then(()=>{
    console.log('Database Connected');
}).catch(err=>{
  console.log('Database not connected'+err)
})

// Public
app.use(express.static(path.join(__dirname, 'public')))
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
app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:8081")
})