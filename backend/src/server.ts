import express from "express";
import cors from "cors";
import { fitness_cart, sample_types } from "./data";

const app = express(); // we are gonna define with app our API's
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/fitness/", (req, res) => {
  res.send(fitness_cart);
});

app.get("/api/fitness/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const fitnessItems = fitness_cart.filter((fitness) =>
    fitness.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  res.send(fitnessItems);
});

app.get("/api/fitness/types", (req, res) => {
  res.send(sample_types);
});

app.get("/api/fitness/type/:typeName", (req, res) => {
  const typeName = req.params.typeName;
  const fitnessItem = fitness_cart.filter((fitness) =>
    fitness.type?.includes(typeName)
  );

  res.send(fitnessItem);
});

app.get("/api/fitness/:fitnessId", (req, res) => {
  const fitnessId = req.params.fitnessId;
  const fitness = fitness_cart.find((fitness) => fitness.id == fitnessId);
  res.send(fitness);
});

const port = 5000;
app.listen(port, () => {
  console.log("Server is listening on port: http://localhost:" + port);
});
