const express = require('express')
const app = express()
const livroModel = require('./src/model/livro')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/livros', async (req, res) => {
  const livros = await livroModel.find({})
  return res.status(200).json(livros)
})

app.post('/livros/cadastro', async (req, res) => {
  const response = await livroModel.create({
    id: req.body.id,
    titulo: req.body.titulo,
    num_paginas: req.body.num_paginas,
    isbn: req.body.isbn,
    editora: req.body.editora
  })
  return res.status(200).json({
    data: response
  })
})

app.listen(8080, () => {
    console.log('Servidor operacional!')
})