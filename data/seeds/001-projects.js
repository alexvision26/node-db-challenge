exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "SQL Database Sprint Challenge",
          description: "Complete the challenge in three hours",
          completed: true
        },
        {
          id: 2,
          name: "Labs Project",
          description: "Complete the project in 2 months",
          completed: false
        },
        {
          id: 3,
          name: "Complete Unit 4 Node Build Week",
          description: "Complete the Unit 4 Node build week in 1 week",
          completed: false
        }
      ]);
    });
};
