const app = require("../app");
const request = require("supertest");
const { sequelize, Cat, User, CatImage } = require("../models");

beforeEach(async () => {
  await Cat.destroy({ where: {} });
  await User.destroy({ where: {} });
  await CatImage.destroy({ where: {} });

  const user = await User.create({
    userName: "testuser",
    email: "testuser@example.com",
    password: "password",
  });

  const cat1 = await Cat.create({
    name: "Cat 1",
    breed: "Siamese",
    age: "2 years old",
    gender: "female",
    description: "Cat 1 description",
    adoptionStatus: "Available",
    UserId: user.id,
  });

  const cat2 = await Cat.create({
    name: "Cat 2",
    breed: "Maine Coon",
    age: "3 years old",
    gender: "male",
    description: "Cat 2 description",
    adoptionStatus: "Available",
    UserId: user.id,
  });

  await CatImage.create({ imgUrl: "cat1.jpg", CatId: cat1.id });
  await CatImage.create({ imgUrl: "cat2.jpg", CatId: cat2.id });
});

afterAll(async () => {
  await sequelize.close();
});

describe("/pub/cats Endpoint Tests", () => {
  test("should return all available cats with their details", async () => {
    const { status, body } = await request(app)
      .get("/pub/cats")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(body.cats).toHaveLength(2);
    expect(body.cats[0].name).toBe("Cat 1");
    expect(body.cats[0].adoptionStatus).toBe("Available");
    expect(body.cats[0].User.userName).toBe("testuser");
    expect(body.cats[0].CatImages).toHaveLength(1);
    expect(body.cats[0].CatImages[0].imgUrl).toBe("cat1.jpg");
  });
});
