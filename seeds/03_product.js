exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "product_tb"; ALTER SEQUENCE product_tb_id_seq RESTART WITH 9;')
    .then(function () {
      // Inserts seed entries
      return knex('product_tb').insert([
        {
          id: 1,
          picture_url: './assets/paleoburger.png',
          name: 'Paleo Burger',
          description: 'One full-sized imported Canadian bison beef patty cooked to perfection to hold its all natural quality flavor, laid on a bed of shredded lettuce topped with a slice of low-fat cheddar cheese topped with pickles and sesame seeds kept simple.  All brought together with a ramekin of our secret Greek yogurt-based sauce.',
          price: '1695',
          meal_type: 'entree',
          active: true,
          vendor_tb_id: 1
        },
        {
          id: 2,
          picture_url: './assets/chipotlebowl.png',
          name: 'Chipotle Beef Burrito Bowl',
          description: 'All natural lean ground beef seasoned chipotle style, served with brown rice, corn, black black beans and freshly made salsa.',
          price: '1495',
          meal_type: 'entree',
          active: true,
          vendor_tb_id: 1
        },
        {
          id: 3,
          picture_url: './assets/salmonandrice.png',
          name: 'Salmon and Brown Rice',
          description: 'Fresh grilled salmon served with steamed asparagus, brown rice and a lemon wedge.',
          price: '1795',
          meal_type: 'entree',
          active: true,
          vendor_tb_id: 1
        },
        {
          id: 4,
          picture_url: './assets/kalesalad.png',
          name: 'Kale Salad',
          description: 'All natural grilled chicken with our house seasoning, served over baby kale with roasted beets, roasted chick peas topped with goat cheese crumbles and a side of balsamic vinaigrette.',
          price: '1295',
          meal_type: 'entree',
          active: true,
          vendor_tb_id: 1
        },
        {
          id: 5,
          picture_url: './assets/frittata.png',
          name: 'Asparagus and tomato egg frittata',
          description: 'Farm fresh eggs baked into a fluffy omelette studded with asparagus, fresh tomatoes seasoned with a hint of smoked paprika, served with a side of roasted potatoes.',
          price: '1195',
          meal_type: 'breakfast',
          active: true,
          vendor_tb_id: 1
        },
        {
          id: 6,
          picture_url: './assets/eggwhites.png',
          name: 'Egg Whites and Chicken Sausage',
          description: 'Egg whites served with sauteed spinach, onions and peppers and house made chicken sausage patty',
          price: '1195',
          meal_type: 'breakfast',
          active: true,
          vendor_tb_id: 1
        },
        {
          id: 7,
          picture_url: './assets/poundcake.png',
          name: 'Protein Pound Cake',
          description: 'A plain protein poundcake',
          price: '495',
          meal_type: 'snack',
          active: true,
          vendor_tb_id: 1
        },{
          id: 8,
          picture_url: './assets/chocolatechipcake.png',
          name: 'Chocolate Chip Protein Pound Cake',
          description: 'A chocolate chip protein poundcake',
          price: '495',
          meal_type: 'snack',
          active: true,
          vendor_tb_id: 1
        }    
      ]);
    });
};

