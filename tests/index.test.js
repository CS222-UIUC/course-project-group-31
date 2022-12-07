const request = require("supertest");
const app = require("server/index.js");
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /useraccount", () => {
    describe("given a fname, lname, uname, and password", () => {
        test("should", async () => {
            const response = await requestAnimationFrame(app).post("/username").send({
                firstname: "John",
                lastname: "Smith",
                username: "Jsmith",
                password: "12345"
            })
            expect(response.statusCode).toBe(200)
        })
        
    })
})

describe("POST /courses", () => {
  describe("given a cID, cName, cStart, and CEnd", () => {
      test("should", async () => {
          const response = await requestAnimationFrame(app).post("/courses").send({
              courseID: "100",
              coursename: "Intro to Computerscience",
              coursestartdate: "12/1",
              coureseenddate: "1/1"
          })
          expect(response.statusCode).toBe(200)
      })
      
  })
})