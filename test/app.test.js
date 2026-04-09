// test/app.test.js — Tests d'intégration API

const request = require("supertest");
const app = require("../src/app");
const userService = require("../src/userService");

beforeEach(() => userService.resetUsers());

describe("API Dave Procode", () => {

  test("GET / → statut 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("Dave Procode");
  });

  test("GET /health → status UP", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("UP");
  });

  test("GET /api/users → liste 3 users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.count).toBe(3);
  });

  test("GET /api/users/1 → Diallo", async () => {
    const res = await request(app).get("/api/users/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.nom).toBe("Diallo");
  });

  test("GET /api/users/999 → 404", async () => {
    const res = await request(app).get("/api/users/999");
    expect(res.statusCode).toBe(404);
  });

  test("POST /api/users → crée un user", async () => {
    const res = await request(app).post("/api/users").send({
      nom: "Gueye", prenom: "Aminata", email: "aminata@test.sn"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.nom).toBe("Gueye");
  });

  test("DELETE /api/users/1 → supprimé", async () => {
    const res = await request(app).delete("/api/users/1");
    expect(res.statusCode).toBe(200);
  });

  test("GET /api/math/addition?a=5&b=3 → 8", async () => {
    const res = await request(app).get("/api/math/addition?a=5&b=3");
    expect(res.body.resultat).toBe(8);
  });
});