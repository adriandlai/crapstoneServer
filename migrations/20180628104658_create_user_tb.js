exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_tb', (table)=>{
        table.increments()
        table.text('email')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_tb')
  
};

