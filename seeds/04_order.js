exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "order_tb"; ALTER SEQUENCE order_tb_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('order_tb').insert([
        {
          id: 1,
          current_order: 'false',
          total: 3090,
          user_tb_id: 1
        },
        {
          id: 2,
          current_order: 'false',
          total: 16950,
          user_tb_id: 2
        },
        {
          id: 3,
          current_order: 'false',
          total: 12950,
          user_tb_id: 2
        }
      ]);
    });
};

