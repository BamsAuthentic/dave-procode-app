// test/math.test.js — Tests unitaires math

const { addition, soustraction, multiplication, division, estPair, factorielle } = require("../src/math");

describe("Module Math", () => {

  describe("addition()", () => {
    test("additionne deux nombres positifs", () => expect(addition(2, 3)).toBe(5));
    test("additionne avec un négatif", () => expect(addition(10, -4)).toBe(6));
    test("lève une erreur si pas un nombre", () => {
      expect(() => addition("a", 3)).toThrow("Les paramètres doivent être des nombres");
    });
  });

  describe("soustraction()", () => {
    test("soustrait deux nombres", () => expect(soustraction(10, 4)).toBe(6));
    test("retourne un négatif si b > a", () => expect(soustraction(3, 8)).toBe(-5));
  });

  describe("multiplication()", () => {
    test("multiplie deux nombres", () => expect(multiplication(4, 5)).toBe(20));
    test("retourne 0 si facteur = 0", () => expect(multiplication(7, 0)).toBe(0));
    test("multiplie deux négatifs", () => expect(multiplication(-3, -4)).toBe(12));
  });

  describe("division()", () => {
    test("divise deux nombres", () => expect(division(10, 2)).toBe(5));
    test("retourne un décimal", () => expect(division(7, 2)).toBe(3.5));
    test("lève une erreur division par zéro", () => {
      expect(() => division(10, 0)).toThrow("Division par zéro impossible");
    });
  });

  describe("estPair()", () => {
    test("retourne true pour pair", () => expect(estPair(4)).toBe(true));
    test("retourne false pour impair", () => expect(estPair(7)).toBe(false));
    test("retourne true pour 0", () => expect(estPair(0)).toBe(true));
  });

  describe("factorielle()", () => {
    test("factorielle(0) = 1", () => expect(factorielle(0)).toBe(1));
    test("factorielle(5) = 120", () => expect(factorielle(5)).toBe(120));
    test("lève une erreur pour négatif", () => {
      expect(() => factorielle(-1)).toThrow("Le paramètre doit être un nombre positif");
    });
  });
});
