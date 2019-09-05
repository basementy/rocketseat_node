const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// Requisições
routes.get("/products", ProductController.index); // Lista todas os products no DB
routes.get("/products/:id", ProductController.show); // Lista um product especifico através do params
routes.post("/products", ProductController.store); // Registra um novo product no DB
routes.put("/products/:id", ProductController.update); // Atualiza um product especifico através do params
routes.delete("/products/:id", ProductController.destroy); // Deleta um product através do params

module.exports = routes;