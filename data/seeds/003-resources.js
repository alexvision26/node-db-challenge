exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          name: "Visual Studi Code",
          description: "You'll need this"
        },
        {
          id: 2,
          name: "SQLite Studio 3",
          description: "Probably pretty important"
        },
        {
          id: 3,
          name: "Computer",
          description: "Useful for coding..."
        }
      ]);
    });
};
