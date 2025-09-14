#! /usr/bin/env node
const {program} = require("commander");

program.command("seed").description("Seed data into the database").action(seed);
