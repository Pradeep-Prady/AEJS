import app from "../../app.js";
import request from "supertest";

describe("GET /", () => {
  it("responds with JSON", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello, world!" });
  });
});
