const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const db = require("../data/dbConfig");

const server = express();

const projectRouter = require("../projects/project-router");

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
