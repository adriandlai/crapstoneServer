exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cart_tb"; ALTER SEQUENCE cart_tb_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('cart_tb').insert([
        {
          id: 1,
          product_tb_id: 3,
          order_tb_id: 1,
          quantity: 1
        },
        {
          id: 2,
          product_tb_id: 4,
          order_tb_id: 1,
          quantity: 1
        },
        {
          id: 3,
          product_tb_id: 1,
          order_tb_id: 2,
          quantity: 10
        },
        {
          id: 4,
          product_tb_id: 4,
          order_tb_id: 3,
          quantity: 10
        }
      ]);
    });
};
