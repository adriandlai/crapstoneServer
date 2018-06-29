 exports.up = function(knex, Promise) {
    return knex.schema.createTable('vendor_tb', (table)=>{
        table.increments()
        table.text('picture_url')
        table.text('name')
        table.text('description')
        table.text('delivery_city')
        table.boolean('active')   
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('vendor_tb')
  
};





  

