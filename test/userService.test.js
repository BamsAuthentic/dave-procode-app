// test/userService.test.js — Tests unitaires userService

const userService = require("../src/userService");

beforeEach(() => userService.resetUsers());

describe("UserService", () => {

  describe("getAllUsers()", () => {
    test("retourne 3 utilisateurs par défaut", () => {
      expect(userService.getAllUsers().length).toBe(3);
    });
  });

  describe("getUserById()", () => {
    test("retourne l'utilisateur ID 1", () => {
      expect(userService.getUserById(1).nom).toBe("Diallo");
    });
    test("retourne null pour ID inexistant", () => {
      expect(userService.getUserById(999)).toBeNull();
    });
  });

  describe("createUser()", () => {
    test("crée un utilisateur", () => {
      const u = userService.createUser({ nom: "Kane", prenom: "Ousmane", email: "ousmane@test.sn" });
      expect(u.nom).toBe("Kane");
    });
    test("rôle par défaut = user", () => {
      const u = userService.createUser({ nom: "Ba", prenom: "Amy", email: "amy@test.sn" });
      expect(u.role).toBe("user");
    });
    test("erreur si champs manquants", () => {
      expect(() => userService.createUser({ nom: "X" })).toThrow("obligatoires");
    });
    test("erreur si email déjà existant", () => {
      expect(() => userService.createUser({
        nom: "X", prenom: "Y", email: "mamadou@daveprocode.sn"
      })).toThrow("existe déjà");
    });
  });

  describe("deleteUser()", () => {
    test("supprime un utilisateur existant", () => {
      expect(userService.deleteUser(1)).toBe(true);
    });
    test("retourne false pour ID inexistant", () => {
      expect(userService.deleteUser(999)).toBe(false);
    });
  });
});