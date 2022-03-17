#! /usr/bin/env node

import { program } from "commander";
import hello from "./commands/hello.js";

program.command("hello").description("Prints Hello").action(hello);

program.parse();
