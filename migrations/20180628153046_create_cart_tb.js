exports.up = function(knex, Promise) {
    return knex.schema.createTable('cart_tb', (table)=>{
        table.increments()
        table.integer('product_tb_id').references('product_tb.id').onDelete('cascade')
        table.integer('order_tb_id').references('order_tb.id').onDelete('cascade')
        table.integer('quantity')   
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cart_tb')  

};
