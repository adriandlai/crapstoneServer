 
exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_tb', (table)=>{
        table.increments()
        table.boolean('current_order')
        table.float('total')
        table.integer('user_tb_id').references('user_tb.id').onDelete('cascade')

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('order_tb')
  
};







  

