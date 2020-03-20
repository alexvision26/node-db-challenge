const router = require("express").Router();

const db = require("./project-model");

router.get("/", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ message: "server error" }));
});

module.exports = router;
