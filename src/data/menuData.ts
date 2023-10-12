import { MenuDataType } from '../types/CommonTypes';

export const menuData: MenuDataType = {
  categories: [
    {
      id: 'pizza',
      name: 'Pizza',
      data: [
        {
          id: 'Margherita',
          name: 'Margherita',
          ingredients: 'Sauce, mozzarella, oregano',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Margherita',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 17, variantId: 'Margherita_25' },
            { size: '35cm', price: 26, variantId: 'Margherita_35' },
            { size: '45cm', price: 35, variantId: 'Margherita_45' },
          ],
        },

        {
          id: 'Capriciosa',
          name: 'Capriciosa',
          ingredients: 'Sauce, mozzarella, ham, champignons',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Capriciosa',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 21, variantId: 'Capriciosa_25' },
            { size: '35cm', price: 32, variantId: 'Capriciosa_35' },
            { size: '45cm', price: 42, variantId: 'Capriciosa_45' },
          ],
        },
        {
          id: 'Mayonnaise',
          name: 'Mayonnaise',
          ingredients: 'Sauce, cheese, ham, champignons, corn, mayonnaise',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Mayonnaise',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 21, variantId: 'Mayonnaise_25' },
            { size: '35cm', price: 33, variantId: 'Mayonnaise_35' },
            { size: '45cm', price: 43, variantId: 'Mayonnaise_45' },
          ],
        },
        {
          id: 'Hawaiian',
          name: 'Hawaiian',
          ingredients: 'Sauce, mozzarella, ham, pineapple',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Hawaiian',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 21, variantId: 'Hawaiian_25' },
            { size: '35cm', price: 33, variantId: 'Hawaiian_35' },
            { size: '45cm', price: 43, variantId: 'Hawaiian_45' },
          ],
        },

        {
          id: 'Classica',
          name: 'Classica',
          ingredients: 'Sauce, mozzarella, ham, champignons, pepper, corn',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Classica',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 21, variantId: 'Classica_25' },
            { size: '35cm', price: 33, variantId: 'Classica_35' },
            { size: '45cm', price: 43, variantId: 'Classica_45' },
          ],
        },
        {
          id: 'Decoro',
          name: 'Decoro',
          ingredients: 'Sauce, mozzarella, bacon, chicken, pepper, onion',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Decoro',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 21, variantId: 'Decoro_25' },
            { size: '35cm', price: 33, variantId: 'Decoro_35' },
            { size: '45cm', price: 43, variantId: 'Decoro_45' },
          ],
        },
        {
          id: 'Salame',
          name: 'Salame',
          ingredients: 'Sauce, mozzarella, salami, corn',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Salame',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 21, variantId: 'Salame_25' },
            { size: '35cm', price: 33, variantId: 'Salame_35' },
            { size: '45cm', price: 43, variantId: 'Salame_45' },
          ],
        },
        {
          id: 'Neapolitan',
          name: 'Neapolitan',
          ingredients: 'Sauce, mozzarella, salami, black olives, garlic',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Neapolitan',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 23, variantId: 'Neapolitan_25' },
            { size: '35cm', price: 34, variantId: 'Neapolitan_35' },
            { size: '45cm', price: 45, variantId: 'Neapolitan_45' },
          ],
        },
        {
          id: 'Torino',
          name: 'Torino',
          ingredients: 'Sauce, mozzarella, salami, chicken, champignons, corn',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Torino',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 23, variantId: 'Torino_25' },
            { size: '35cm', price: 34, variantId: 'Torino_35' },
            { size: '45cm', price: 45, variantId: 'Torino_45' },
          ],
        },
        {
          id: 'Mexicana',
          name: 'Mexicana',
          ingredients:
            'Sauce, mozzarella, spianata romana DOP, bacon, corn, onion, garlic',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Mexicana',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 23, variantId: 'Mexicana_25' },
            { size: '35cm', price: 34, variantId: 'Mexicana_35' },
            { size: '45cm', price: 45, variantId: 'Mexicana_45' },
          ],
        },
        {
          id: 'Grande',
          name: 'Grande',
          ingredients: 'Sauce, mozzarella, ham, spianata romana DOP, kabanos',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Grande',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 23, variantId: 'Grande_25' },
            { size: '35cm', price: 34, variantId: 'Grande_35' },
            { size: '45cm', price: 45, variantId: 'Grande_45' },
          ],
        },
        {
          id: 'Galician',
          name: 'Galician',
          ingredients:
            'Sauce, mozzarella, sausage, champignons, corn, pepper, onion',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Galician',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 23, variantId: 'Galician_25' },
            { size: '35cm', price: 34, variantId: 'Galician_35' },
            { size: '45cm', price: 45, variantId: 'Galician_45' },
          ],
        },
        {
          id: 'Country',
          name: 'Country',
          ingredients:
            'Sauce, mozzarella, sausage, pickled cucumber, onion, garlic',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Country',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 25, variantId: 'Country_25' },
            { size: '35cm', price: 36, variantId: 'Country_35' },
            { size: '45cm', price: 47, variantId: 'Country_45' },
          ],
        },
        {
          id: 'Palermo',
          name: 'Palermo',
          ingredients: 'Sauce, mozzarella, chicken, champignons, pepper',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Palermo',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 25, variantId: 'Palermo_25' },
            { size: '35cm', price: 36, variantId: 'Palermo_35' },
            { size: '45cm', price: 47, variantId: 'Palermo_45' },
          ],
        },
        {
          id: 'Domenica',
          name: 'Domenica',
          ingredients: 'Sauce, mozzarella, chicken, champignons, corn, onion',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Domenica',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 26, variantId: 'Domenica_25' },
            { size: '35cm', price: 37, variantId: 'Domenica_35' },
            { size: '45cm', price: 48, variantId: 'Domenica_45' },
          ],
        },
        {
          id: 'Tuna',
          name: 'Tuna',
          ingredients: 'Sauce, mozzarella, tuna,leccino olives, corn, onion',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Tuna',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 26, variantId: 'Tuna_25' },
            { size: '35cm', price: 37, variantId: 'Tuna_35' },
            { size: '45cm', price: 48, variantId: 'Tuna_45' },
          ],
        },
        {
          id: 'Broccoli',
          name: 'Broccoli',
          ingredients:
            'Sauce, mozzarella, sun-dried tomatoes, broccoli, tomatoes, spinach',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Broccoli',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 26, variantId: 'Broccoli_25' },
            { size: '35cm', price: 37, variantId: 'Broccoli_35' },
            { size: '45cm', price: 48, variantId: 'Broccoli_45' },
          ],
        },
        {
          id: 'Greek',
          name: 'Greek',
          ingredients:
            'Sauce, mozzarella, tomato, haloumi cheese, onion, black olives',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Greek',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 26, variantId: 'Greek_25' },
            { size: '35cm', price: 37, variantId: 'Greek_35' },
            { size: '45cm', price: 48, variantId: 'Greek_45' },
          ],
        },
        {
          id: 'Four cheese',
          name: 'Four cheese',
          ingredients:
            'Sauce, mozzarella, goat cheese, haoumi cheese, blue cheese',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Four cheese',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 26, variantId: 'Four_cheese_25' },
            { size: '35cm', price: 37, variantId: 'Four_cheese_35' },
            { size: '45cm', price: 48, variantId: 'Four_cheese_45' },
          ],
        },
        {
          id: 'Parma',
          name: 'Parma',
          ingredients: 'Sauce, mozzarella, ham, arugula, cherry tomatoes',
          image: {
            src: require('./../assets/pizza-menu-small.jpg'),
            alt: 'Parma',
          },
          parentCategoryId: 'pizza',
          additionalIngredientsAvailable: true,
          variants: [
            { size: '25cm', price: 28, variantId: 'Parma_25' },
            { size: '35cm', price: 39, variantId: 'Parma_35' },
            { size: '45cm', price: 49, variantId: 'Parma_45' },
          ],
        },
      ],
    },
    {
      id: 'burger',
      name: 'Burger',
      data: [
        {
          id: 'Classic burger',
          name: 'Classic burger',
          ingredients:
            'Beef 200G, fresh lettuce, onion, pickled cucumber, tomato relish, mayonnaise',
          image: {
            src: require('./../assets/burger-menu-small.jpg'),
            alt: 'Classic burger',
          },
          parentCategoryId: 'burger',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 32,
              variantId: 'ClassicBurger_standard',
            },
          ],
        },
        {
          id: 'Cheese burger',
          name: 'Cheese burger',
          ingredients:
            'Beef 200G, cheddar cheese, fresh lettuce, onion, pickled cucumber, tomato relish, mayonnaise',
          image: {
            src: require('./../assets/burger-menu-small.jpg'),
            alt: 'Cheese burger',
          },
          parentCategoryId: 'burger',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 35,
              variantId: 'Cheese_burger_standard',
            },
          ],
        },
        {
          id: 'Bacon burger',
          name: 'Bacon burger',
          ingredients:
            'Beef 200G, crispy bacon, fresh lettuce, tomato, onion, pickled cucumber, honey-mustard sauce',
          image: {
            src: require('./../assets/burger-menu-small.jpg'),
            alt: 'Bacon burger',
          },
          parentCategoryId: 'burger',
          additionalIngredientsAvailable: false,
          variants: [
            { size: 'standard', price: 35, variantId: 'Bacon_burger_standard' },
          ],
        },
        {
          id: 'Blue cheese burger',
          name: 'Blue cheese burger',
          ingredients:
            'Beef 200G, lamb’s lettuce, pickled pear, nuts, blue cheese, honey-mustard sauce and currant jam',
          image: {
            src: require('./../assets/burger-menu-small.jpg'),
            alt: 'Blue cheese burger',
          },
          parentCategoryId: 'burger',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 37,
              variantId: 'Blue_cheese_burger_standard',
            },
          ],
        },
        {
          id: 'Mexican burger',
          name: 'Mexican burger',
          ingredients:
            'Beef 200G, cheese, guacamole, lettuce, tomato, coriander, jalapeno, mimolette cheese, sause chipotle and mayonnaise',
          image: {
            src: require('./../assets/burger-menu-small.jpg'),
            alt: 'Mexican burger',
          },
          parentCategoryId: 'burger',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 37,
              variantId: 'Mexican_burger_standard',
            },
          ],
        },
        {
          id: 'Italian burger',
          name: 'Italian burger',
          ingredients:
            'Beef 200G, rucola, dried tomatoes, parmesan cheese, homemade pesto, mayonnaise',
          image: {
            src: require('./../assets/burger-menu-small.jpg'),
            alt: 'Italian burger',
          },
          parentCategoryId: 'burger',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 37,
              variantId: 'Italian_burger_standard',
            },
          ],
        },
      ],
    },
    {
      id: 'pasta',
      name: 'Pasta',
      data: [
        {
          id: 'Spaghetti al pomodoro fresco',
          name: 'Spaghetti al pomodoro fresco',
          ingredients: 'Spaghetti, garlic, basil, fresh tomatoes',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Spaghetti al pomodoro fresco',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 33,
              variantId: 'Spaghetti_al_pomodoro_fresco_standard',
            },
          ],
        },
        {
          id: 'Spaghetti bolognese',
          name: 'Spaghetti bolognese',
          ingredients: 'Spaghetti, meat sauce, tomatoes, parmesan',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Spaghetti bolognese',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 35,
              variantId: 'Spaghetti_bolognese_standard',
            },
          ],
        },
        {
          id: 'Spaghetti carbonara',
          name: 'Spaghetti carbonara',
          ingredients: 'Spaghetti, bacon, cream, egg',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Spaghetti carbonara',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 37,
              variantId: 'Spaghetti_carbonara_standard',
            },
          ],
        },
        {
          id: 'Penne con pollo',
          name: 'Penne con pollo',
          ingredients: 'Penne, chicken, cream, champignons, rosemary',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Penne con pollo',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 37,
              variantId: 'Penne_con_pollo_standard',
            },
          ],
        },
        {
          id: 'Tagliatelle with spinach',
          name: 'Tagliatelle with spinach',
          ingredients:
            'Cream sauce, garlic, spinach, gorgonzola, topped with parmesan cheese',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Tagliatelle with spinach',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 36,
              variantId: 'Tagliatelle_with_spinach_standard',
            },
          ],
        },
        {
          id: 'Tagliatelle with prawns',
          name: 'Tagliatelle with prawns',
          ingredients:
            'Butter and wine sauce, cream, ​spinach, garlic, prawns, cherry tomatoes, chilli, parsley',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Tagliatelle with prawns',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 42,
              variantId: 'Tagliatelle_with_prawns_standard',
            },
          ],
        },
        {
          id: 'Penne with pesto',
          name: 'Penne with pesto',
          ingredients: 'Olive oil, cream, garlic, pesto, parmesan',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Penne with pesto',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 35,
              variantId: 'Penne_with_pesto_standard',
            },
          ],
        },
        {
          id: 'Penne formaggi',
          name: 'Penne formaggi',
          ingredients: 'Cream sauce, gorgonzola, parmesan',
          image: {
            src: require('./../assets/pasta-menu-small.jpg'),
            alt: 'Penne formaggi',
          },
          parentCategoryId: 'pasta',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: 'standard',
              price: 34,
              variantId: 'Penne_formaggi_standard',
            },
          ],
        },
      ],
    },
    {
      id: 'drinks',
      name: 'Drinks',
      data: [
        {
          id: 'Cola',
          name: 'Cola',
          ingredients: '',
          image: {
            src: require('./../assets/drinks-menu-small.jpg'),
            alt: 'Cola',
          },
          parentCategoryId: 'drinks',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: '0,5l',
              price: 8,
              variantId: 'Cola_05',
            },
            {
              size: '0,85l',
              price: 12,
              variantId: 'Cola_085',
            },
          ],
        },
        {
          id: 'Sprite',
          name: 'Sprite',
          ingredients: '',
          image: {
            src: require('./../assets/drinks-menu-small.jpg'),
            alt: 'Sprite',
          },
          parentCategoryId: 'drinks',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: '0,5l',
              price: 8,
              variantId: 'Sprite_05',
            },
            {
              size: '0,85l',
              price: 12,
              variantId: 'Sprite_085',
            },
          ],
        },
        {
          id: 'Fanta',
          name: 'Fanta',
          ingredients: '',
          image: {
            src: require('./../assets/drinks-menu-small.jpg'),
            alt: 'Fanta',
          },
          parentCategoryId: 'drinks',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: '0,5l',
              price: 8,
              variantId: 'Fanta_05',
            },
            {
              size: '0,85l',
              price: 12,
              variantId: 'Fanta_085',
            },
          ],
        },
        {
          id: 'Water',
          name: 'Water',
          ingredients: '',
          image: {
            src: require('./../assets/drinks-menu-small.jpg'),
            alt: 'Water',
          },
          parentCategoryId: 'drinks',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: '0,5l',
              price: 6,
              variantId: 'Water_05',
            },
            {
              size: '1,0l',
              price: 8,
              variantId: 'Water_1',
            },
          ],
        },
        {
          id: 'Juice',
          name: 'Juice',
          ingredients: '',
          image: {
            src: require('./../assets/drinks-menu-small.jpg'),
            alt: 'Juice',
          },
          parentCategoryId: 'drinks',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: '0,5l',
              price: 8,
              variantId: 'Juice_05',
            },
            {
              size: '1,0l',
              price: 12,
              variantId: 'Juice_1',
            },
          ],
        },
        {
          id: 'Tea',
          name: 'Tea',
          ingredients: '',
          image: {
            src: require('./../assets/drinks-menu-small.jpg'),
            alt: 'Tea',
          },
          parentCategoryId: 'drinks',
          additionalIngredientsAvailable: false,
          variants: [
            {
              size: '0,2l',
              price: 8,
              variantId: 'Tea_05',
            },
          ],
        },
      ],
    },
  ],
  additionalIngredients: [
    {
      id: 'Ham',
      name: 'Ham',
      variants: [
        { size: '25cm', price: 2, variantId: 'Ham_25' },
        { size: '35cm', price: 3, variantId: 'Ham_35' },
        { size: '45cm', price: 4, variantId: 'Ham_45' },
      ],
    },
    {
      id: 'Pineapple',
      name: 'Pineapple',
      variants: [
        { size: '25cm', price: 2, variantId: 'Pineapple_25' },
        { size: '35cm', price: 3, variantId: 'Pineapple_35' },
        { size: '45cm', price: 4, variantId: 'Pineapple_45' },
      ],
    },
    {
      id: 'Mushrooms',
      name: 'Mushrooms',
      variants: [
        { size: '25cm', price: 2, variantId: 'Mushrooms_25' },
        { size: '35cm', price: 3, variantId: 'Mushrooms_35' },
        { size: '45cm', price: 4, variantId: 'Mushrooms_45' },
      ],
    },
    {
      id: 'Corn',
      name: 'Corn',
      variants: [
        { size: '25cm', price: 2, variantId: 'Corn_25' },
        { size: '35cm', price: 3, variantId: 'Corn_35' },
        { size: '45cm', price: 4, variantId: 'Corn_45' },
      ],
    },
    {
      id: 'BellPepper',
      name: 'Bell Pepper',
      variants: [
        { size: '25cm', price: 2, variantId: 'BellPepper_25' },
        { size: '35cm', price: 3, variantId: 'BellPepper_35' },
        { size: '45cm', price: 4, variantId: 'BellPepper_45' },
      ],
    },
    {
      id: 'Onion',
      name: 'Onion',
      variants: [
        { size: '25cm', price: 2, variantId: 'Onion_25' },
        { size: '35cm', price: 3, variantId: 'Onion_35' },
        { size: '45cm', price: 4, variantId: 'Onion_45' },
      ],
    },
    {
      id: 'Sausage',
      name: 'Sausage',
      variants: [
        { size: '25cm', price: 2, variantId: 'Sausage_25' },
        { size: '35cm', price: 3, variantId: 'Sausage_35' },
        { size: '45cm', price: 4, variantId: 'Sausage_45' },
      ],
    },
    {
      id: 'Arugula',
      name: 'Arugula',
      variants: [
        { size: '25cm', price: 2, variantId: 'Arugula_25' },
        { size: '35cm', price: 3, variantId: 'Arugula_35' },
        { size: '45cm', price: 4, variantId: 'Arugula_45' },
      ],
    },
    {
      id: 'FetaCheese',
      name: 'Feta Cheese',
      variants: [
        { size: '25cm', price: 2, variantId: 'FetaCheese_25' },
        { size: '35cm', price: 3, variantId: 'FetaCheese_35' },
        { size: '45cm', price: 4, variantId: 'FetaCheese_45' },
      ],
    },
    {
      id: 'Salami',
      name: 'Salami',
      variants: [
        { size: '25cm', price: 2, variantId: 'Salami_25' },
        { size: '35cm', price: 3, variantId: 'Salami_35' },
        { size: '45cm', price: 4, variantId: 'Salami_45' },
      ],
    },
    {
      id: 'Shrimp',
      name: 'Shrimp',
      variants: [
        { size: '25cm', price: 2, variantId: 'Shrimp_25' },
        { size: '35cm', price: 3, variantId: 'Shrimp_35' },
        { size: '45cm', price: 4, variantId: 'Shrimp_45' },
      ],
    },
    {
      id: 'Spinach',
      name: 'Spinach',
      variants: [
        { size: '25cm', price: 2, variantId: 'Spinach_25' },
        { size: '35cm', price: 3, variantId: 'Spinach_35' },
        { size: '45cm', price: 4, variantId: 'Spinach_45' },
      ],
    },
    {
      id: 'Mozzarella',
      name: 'Mozzarella',
      variants: [
        { size: '25cm', price: 2, variantId: 'Mozzarella_25' },
        { size: '35cm', price: 3, variantId: 'Mozzarella_35' },
        { size: '45cm', price: 4, variantId: 'Mozzarella_45' },
      ],
    },
    {
      id: 'Olives',
      name: 'Olives',
      variants: [
        { size: '25cm', price: 2, variantId: 'Olives_25' },
        { size: '35cm', price: 3, variantId: 'Olives_35' },
        { size: '45cm', price: 4, variantId: 'Olives_45' },
      ],
    },
    {
      id: 'BBQSauce',
      name: 'BBQ Sauce',
      variants: [
        { size: '25cm', price: 2, variantId: 'BBQSauce_25' },
        { size: '35cm', price: 3, variantId: 'BBQSauce_35' },
        { size: '45cm', price: 4, variantId: 'BBQSauce_45' },
      ],
    },
    {
      id: 'Egg',
      name: 'Egg',
      variants: [
        { size: '25cm', price: 2, variantId: 'Egg_25' },
        { size: '35cm', price: 3, variantId: 'Egg_35' },
        { size: '45cm', price: 4, variantId: 'Egg_45' },
      ],
    },
    {
      id: 'BlueCheese',
      name: 'Blue Cheese',
      variants: [
        { size: '25cm', price: 2, variantId: 'BlueCheese_25' },
        { size: '35cm', price: 3, variantId: 'BlueCheese_35' },
        { size: '45cm', price: 4, variantId: 'BlueCheese_45' },
      ],
    },
    {
      id: 'Chives',
      name: 'Chives',
      variants: [
        { size: '25cm', price: 2, variantId: 'Chives_25' },
        { size: '35cm', price: 3, variantId: 'Chives_35' },
        { size: '45cm', price: 4, variantId: 'Chives_45' },
      ],
    },
    {
      id: 'SunDriedTomatoes',
      name: 'Sun-Dried Tomatoes',
      variants: [
        { size: '25cm', price: 2, variantId: 'SunDriedTomatoes_25' },
        { size: '35cm', price: 3, variantId: 'SunDriedTomatoes_35' },
        { size: '45cm', price: 4, variantId: 'SunDriedTomatoes_45' },
      ],
    },
    {
      id: 'Jalapeno',
      name: 'Jalapeno',
      variants: [
        { size: '25cm', price: 2, variantId: 'Jalapeno_25' },
        { size: '35cm', price: 3, variantId: 'Jalapeno_35' },
        { size: '45cm', price: 4, variantId: 'Jalapeno_45' },
      ],
    },
  ],
};
