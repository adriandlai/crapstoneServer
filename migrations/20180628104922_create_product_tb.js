exports.up = function(knex, Promise) {
    return knex.schema.createTable('product_tb', (table)=>{
        table.increments()
        table.text('picture_url')
        table.text('name')
        table.text('description')
        table.float('price')
        table.text('meal_type')
        table.boolean('active')   
        table.integer('vendor_tb_id').references('vendor_tb.id').onDelete('cascade')      
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('product_tb')
  
};





  
