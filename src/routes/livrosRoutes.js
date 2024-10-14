import express from "express";
import LivroController from "../controllers/livroController.js";

routes.get("/livros", LivroController.listarLivros);