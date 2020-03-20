exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "Create Knex file by running knex init",
          notes: "Install knex first through npm",
          completed: true
        },
        {
          id: 2,
          description: "Finish the last sprint of Node Unit 4",
          notes: "Keep practicing",
          completed: false
        },
        {
          id: 3,
          description: "Create your migration files and design tables",
          notes: "Must design a Data Structure first",
          completed: true
        },
        {
          id: 4,
          description: "Initialize the package.json file",
          notes: "Complete by running npm init",
          completed: true
        }
      ]);
    });
};
