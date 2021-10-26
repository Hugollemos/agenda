const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.render("admin/index")
})

router.get('/posts', (req, res) => {
  res.send("página de posts")
})

router.get("/categorias", (req, res) => {
  res.render("admin/categorias")
})

router.get('/categorias/add', (req, res) => {
  res.render("admin/addcategorias")
})
<<<<<<< HEAD
router.get("/teste", (req, res) => {
  res.send("isso é um teste")
=======

router.get("/teste", (req, res) => {
  res.send("Isso é um teste")
>>>>>>> f34459e8020f86c4cb7487b84ae7fedea1042d2e
})

module.exports = router