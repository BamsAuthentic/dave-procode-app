// src/app.js — Serveur Express principal

const express = require("express");
const userService = require("./userService");
const { addition, multiplication } = require("./math");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET / — Accueil
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur l'API Dave Procode !",
    version: "1.0.0",
    status: "running",
  });
});

// GET /health — Santé du serveur
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// GET /api/users
app.get("/api/users", (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json({ success: true, count: users.length, data: users });
});

// GET /api/users/:id
app.get("/api/users/:id", (req, res) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if (!user)
    return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
  res.status(200).json({ success: true, data: user });
});

// POST /api/users
app.post("/api/users", (req, res) => {
  try {
    const newUser = userService.createUser(req.body);
    res.status(201).json({ success: true, message: "Utilisateur créé", data: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/users/:id
app.delete("/api/users/:id", (req, res) => {
  const supprime = userService.deleteUser(parseInt(req.params.id));
  if (!supprime)
    return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
  res.status(200).json({ success: true, message: "Utilisateur supprimé" });
});

// GET /api/math/addition
app.get("/api/math/addition", (req, res) => {
  try {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.status(200).json({ success: true, operation: `${a} + ${b}`, resultat: addition(a, b) });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// GET /api/math/multiplication
app.get("/api/math/multiplication", (req, res) => {
  try {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.status(200).json({ success: true, operation: `${a} x ${b}`, resultat: multiplication(a, b) });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}