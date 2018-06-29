exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "vendor_tb"; ALTER SEQUENCE vendor_tb_id_seq RESTART WITH 2;')
    .then(function () {
      // Inserts seed entries
      return knex('vendor_tb').insert([
        {
          id: 1,
          picture_url: './assets/vendor1.png',
          name: 'CleanEats Meal Prep',
          description: 'We are a group compiled of culinary skill, nutritional education and life experience fueled by the passion for helping people, we care at clean eats meal prep it’s that simple. With core values of Quality, integrity & customer service, every delivery matters to us.  Nutrition, convenience & results equal the Clean Eats Experience',
          delivery_city: 'Denver',
          active: true
        
        }
      ]);
    });
};

