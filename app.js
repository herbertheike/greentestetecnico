//const express = require("express");
import express from 'express'
const app = express();
import {router as rotaCSV} from "./routes/csvRoutes.js";
const hostname = "127.0.0.1";
const port = 3000
app.use(rotaCSV);

app.use((req, res, next) => {
  res.status(200).send("Teste Tecnico Green Acesso");
  next();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
