exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_tb"; ALTER SEQUENCE user_tb_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('user_tb').insert([
        {
          id: 1,
          email: 'test3@gmail.com',
        },
        {
          id: 2,
          email: 'navyriley@hotmail.com',
        }
      ]);
    });
};
