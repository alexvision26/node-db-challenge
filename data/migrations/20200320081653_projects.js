exports.up = function(knex) {
  knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
      tbl.boolean("completed");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name", 255)
        .notNullable()
        .unique();
      tbl.string("description", 255);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255);
      tbl.boolean("completed");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
