#!/usr/bin/env node

const {connectDB} = require("../services/db");

const command = process.argv[2]; // e.g. "seed", "delete", or "testdb"

if (command === "testdb") {
  connectDB().then(() => {
    console.log("Connection test finished");
    process.exit();
  });
} else {
  console.log("Usage: cli.js <testdb|seed|delete>");
  process.exit(1);
}
