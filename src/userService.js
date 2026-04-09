// src/userService.js — Service de gestion des utilisateurs

let users = [
  { id: 1, nom: "Diallo", prenom: "Mamadou", email: "mamadou@daveprocode.sn", role: "admin" },
  { id: 2, nom: "Ndiaye", prenom: "Fatou",   email: "fatou@daveprocode.sn",   role: "user" },
  { id: 3, nom: "Sow",    prenom: "Ibrahim",  email: "ibrahim@daveprocode.sn",  role: "user" },
];

let nextId = 4;

const getAllUsers = () => [...users];

const getUserById = (id) => users.find((u) => u.id === id) || null;

const createUser = (userData) => {
  if (!userData.nom || !userData.prenom || !userData.email)
    throw new Error("Les champs nom, prenom et email sont obligatoires");

  const emailExiste = users.some((u) => u.email === userData.email);
  if (emailExiste)
    throw new Error("Un utilisateur avec cet email existe déjà");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userData.email))
    throw new Error("Format d'email invalide");

  const nouvelUtilisateur = {
    id: nextId++,
    nom: userData.nom,
    prenom: userData.prenom,
    email: userData.email,
    role: userData.role || "user",
  };

  users.push(nouvelUtilisateur);
  return nouvelUtilisateur;
};

const deleteUser = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

const resetUsers = () => {
  users = [
    { id: 1, nom: "Diallo", prenom: "Mamadou", email: "mamadou@daveprocode.sn", role: "admin" },
    { id: 2, nom: "Ndiaye", prenom: "Fatou",   email: "fatou@daveprocode.sn",   role: "user" },
    { id: 3, nom: "Sow",    prenom: "Ibrahim",  email: "ibrahim@daveprocode.sn",  role: "user" },
  ];
  nextId = 4;
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser, resetUsers };