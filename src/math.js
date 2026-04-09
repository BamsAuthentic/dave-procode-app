// src/math.js — Module utilitaire mathématique

const addition = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Les paramètres doivent être des nombres");
  return a + b;
};

const soustraction = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Les paramètres doivent être des nombres");
  return a - b;
};

const multiplication = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Les paramètres doivent être des nombres");
  return a * b;
};

const division = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Les paramètres doivent être des nombres");
  if (b === 0) throw new Error("Division par zéro impossible");
  return a / b;
};

const estPair = (n) => {
  if (typeof n !== "number")
    throw new Error("Le paramètre doit être un nombre");
  return n % 2 === 0;
};

const factorielle = (n) => {
  if (typeof n !== "number" || n < 0)
    throw new Error("Le paramètre doit être un nombre positif");
  if (n === 0 || n === 1) return 1;
  return n * factorielle(n - 1);
};

module.exports = {
  addition,
  soustraction,
  multiplication,
  division,
  estPair,
  factorielle,
};