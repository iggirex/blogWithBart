
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_tbl', function(table){
    table.increments()
    table.string('title')
    table.text('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_tbl')
};
