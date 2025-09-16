#!/usr/bin/env node
const {program} = require("commander");
const seedData = require("../commands/seed");
const deleteData = require("../commands/delete");

program
  .name("auction")
  .version("1.0.0")
  .description("CLI tool to manage auction data");

program
  .command("seed")
  .description("Seeds auction data into a database")
  .action(seedData);

program
  .command("delete")
  .description("Deletes auction data from the database")
  .action(deleteData);

program.parse(process.argv);
