'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const rawData = fs.readFileSync(path.resolve(__dirname, '../cat/cats.json'))
    const cats = JSON.parse(rawData)
    
    const simplifiedCatData = cats.map((cat, index) => ({
      name: cat.name,
      breed: cat.name,
      age: `${Math.floor(Math.random() * 10) + 1}`, // Random age
      gender: index % 2 === 0 ? "Male" : "Female",  // Alternate genders
      adoptionStatus: "Available",
      description: cat.description || "No description provided.",
      contact: "adopt@catlover.org",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
    
    console.log(simplifiedCatData);
    await queryInterface.bulkInsert("Cats", simplifiedCatData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cats", null, {});
  }
};
