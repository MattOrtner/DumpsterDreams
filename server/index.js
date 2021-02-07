const express = require("express");
const path = require('path')
const app = express(); 
const db = require('../db/connect')
const { DataTypes } = require('sequelize')
const Product = require('../models/product')(db, DataTypes)

app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (_, res) => {
  res.send(200)
});

app.post("/products", async (req, res) => {
  console.log(req.body);
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  })
  console.log(product.id);
  res.json(product)
})

app.delete('/products/:id', async (req, res) => {
  const result = await Product.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json({ success: !!result })
})

app.get('/products', async (req, res) => {
  const products = await Product.findAll()
  res.json(products)
})
app.listen(8080, () => {
  console.log("server started on port 8080");
});
