const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getResources,
  getProjectById,
  getTasks,
  addProject,
  addResource,
  addTask
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db
    .select(
      "projects.name",
      "projects.description",
      "tasks.task_description",
      "tasks.notes"
    )
    .from("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .orderBy("name");
}

function addProject(project) {
  return db("projects").insert(project);
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTask(task) {
  return db("tasks").insert(task);
}
