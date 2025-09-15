#!/usr/bin/env node

const seedData = require("../commands/seed");
const deleteData = require("../commands/delete");

const command = process.argv[2]; // e.g. "seed" or "delete"

switch (command) {
  case "seed":
    seedData();
    break;

  case "delete":
    deleteData();
    break;

  default:
    console.log("Usage: npm run <seed|delete>");
    process.exit(1);
}
