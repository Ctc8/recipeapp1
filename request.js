const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
let offset;
const NUMBER_OF_RECIPES_RETURNED = 1;

const getRecipes = (
  includedIngredientsArr,
  excludedIngredientsArr,
  newRequest = true
) => {
  if (newRequest) {
    offset = 0;
  }

  const params = {
    //apiKey: APIKEY,
    offset: offset,
    number: NUMBER_OF_RECIPES_RETURNED,
    includeIngredients: includedIngredientsArr.toString(),
    excludeIngredients: excludedIngredientsArr.toString(),
    fillIngredients: true,
  };
  const requestURL = baseURL + "?" + new URLSearchParams(params).toString();

  tempData.results.forEach((recipe) => {
    const ingredientsArr = [];
    recipe.missedIngredients.map((ingredient) => {
      ingredientsArr.push(ingredient.name);
    });
    recipe.usedIngredients.map((ingredient) => {
      ingredientsArr.push(ingredient.name);
    });
    populateRecipe(recipe.id, recipe.title, ingredientsArr, recipe.image);
  });


//   fetch(requestURL)
//     .then((response) => response.json())
//     .then((data) => {
//       data.results.forEach((recipe) => {
//         const ingredientsArr = [];
//         recipe.missedIngredients.map((ingredient) => {
//           ingredientsArr.push(ingredient.name);
//         });
//         recipe.usedIngredients.map((ingredient) => {
//           ingredientsArr.push(ingredient.name);
//         });
//         populateRecipe(recipe.id, recipe.title, ingredientsArr, recipe.image);
//       });
//       offset += 5;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
};
//getRecipes(['tomato', 'egg'], ['garlic']);


//TODO delete later
const tempData = {
    results: [
      {
        id: 716432,
        usedIngredientCount: 2,
        missedIngredientCount: 5,
        missedIngredients: [
          {
            id: 11090,
            amount: 0.75,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Produce",
            name: "broccoli",
            original: "3/4 cup chopped, cooked broccoli",
            originalName: "chopped, cooked broccoli",
            meta: ["cooked", "chopped"],
            extendedName: "cooked broccoli",
            image: "https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg",
          },
          {
            id: 11156,
            amount: 2.0,
            unit: "T",
            unitLong: "tablespoons",
            unitShort: "Tbsp",
            aisle: "Produce",
            name: "chives",
            original: "2 T chopped chives",
            originalName: "chopped chives",
            meta: ["chopped"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/fresh-chives.jpg",
          },
          {
            id: 1011077,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Milk, Eggs, Other Dairy",
            name: "t cream",
            original: "1 + 2 T cream or whole milk",
            originalName: "2 T cream or whole milk",
            meta: ["whole"],
            extendedName: "whole t cream",
            image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
          },
          {
            id: 10011821,
            amount: 0.33333334,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Produce",
            name: "orange pepper",
            original: "1/3 cup minced orange pepper",
            originalName: "minced orange pepper",
            meta: ["minced"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png",
          },
          {
            id: 1001009,
            amount: 0.5,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Cheese",
            name: "cheddar cheese",
            original: "1/2 cup shredded cheddar cheese",
            originalName: "shredded cheddar cheese",
            meta: ["shredded"],
            extendedName: "shredded cheddar cheese",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/shredded-cheddar.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 1123,
            amount: 6.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Milk, Eggs, Other Dairy",
            name: "eggs",
            original: "6 eggs",
            originalName: "eggs",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
          },
          {
            id: 11529,
            amount: 0.33333334,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Produce",
            name: "tomato",
            original: "1/3 cup seeded, chopped tomato",
            originalName: "seeded, chopped tomato",
            meta: ["seeded", "chopped"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
          },
        ],
        unusedIngredients: [],
        likes: 0,
        title: "Finger Foods: Frittata Muffins",
        image: "https://spoonacular.com/recipeImages/716432-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 633831,
        usedIngredientCount: 2,
        missedIngredientCount: 9,
        missedIngredients: [
          {
            id: 18079,
            amount: 1.0,
            unit: "cup",
            unitLong: "cup",
            unitShort: "cup",
            aisle: "Pasta and Rice",
            name: "bread crumbs",
            original: "1 cup Soft bread crumbs",
            originalName: "Soft bread crumbs",
            meta: ["soft"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/breadcrumbs.jpg",
          },
          {
            id: 1053,
            amount: 125.0,
            unit: "ml",
            unitLong: "milliliters",
            unitShort: "ml",
            aisle: "Milk, Eggs, Other Dairy",
            name: "cream",
            original: "125 ml Fresh cream",
            originalName: "Fresh cream",
            meta: ["fresh"],
            extendedName: "fresh cream",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg",
          },
          {
            id: 1040,
            amount: 100.0,
            unit: "grams",
            unitLong: "grams",
            unitShort: "g",
            aisle: "Cheese",
            name: "emmentaler cheese",
            original: "100 grams Emmentaler cheese",
            originalName: "Emmentaler cheese",
            meta: [],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/Swiss-cheese.jpg",
          },
          {
            id: 10023572,
            amount: 250.0,
            unit: "grams",
            unitLong: "grams",
            unitShort: "g",
            aisle: "Meat",
            name: "ground meat",
            original: "250 grams Ground meat (half beef, half pork)",
            originalName: "Ground meat (half beef, half pork)",
            meta: ["(half beef, half pork)"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg",
          },
          {
            id: 11282,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "onion",
            original: "1 Onion",
            originalName: "Onion",
            meta: [],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png",
          },
          {
            id: 11297,
            amount: 1.0,
            unit: "tablespoon",
            unitLong: "tablespoon",
            unitShort: "Tbsp",
            aisle: "Produce;Spices and Seasonings",
            name: "parsley",
            original: "1 tablespoon Parsley, chopped",
            originalName: "Parsley, chopped",
            meta: ["chopped"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg",
          },
          {
            id: 11291,
            amount: 1.0,
            unit: "tablespoon",
            unitLong: "tablespoon",
            unitShort: "Tbsp",
            aisle: "Produce",
            name: "spring onion",
            original: "1 tablespoon Spring onion, chopped",
            originalName: "Spring onion, chopped",
            meta: ["chopped"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg",
          },
          {
            id: 6615,
            amount: 200.0,
            unit: "ml",
            unitLong: "milliliters",
            unitShort: "ml",
            aisle: "Canned and Jarred",
            name: "vegetable stock",
            original: "200 ml Vegetable stock",
            originalName: "Vegetable stock",
            meta: [],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png",
          },
          {
            id: 11477,
            amount: 4.0,
            unit: "pounds",
            unitLong: "pounds",
            unitShort: "lb",
            aisle: "Produce",
            name: "zucchini",
            original: "4 pounds x Zucchini, ½ each",
            originalName: "x Zucchini, ½ each",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 1123,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Milk, Eggs, Other Dairy",
            name: "egg",
            original: "1 Egg",
            originalName: "Egg",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
          },
          {
            id: 11529,
            amount: 2.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "tomato",
            original: "2 Tomato, skinned",
            originalName: "Tomato, skinned",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
          },
        ],
        unusedIngredients: [],
        likes: 0,
        title: "Baked Stuffed Zucchini By Angie's",
        image: "https://spoonacular.com/recipeImages/633831-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 645514,
        usedIngredientCount: 2,
        missedIngredientCount: 6,
        missedIngredients: [
          {
            id: 11124,
            amount: 0.5,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Produce",
            name: "carrot",
            original: "1/2 cup shredded carrot",
            originalName: "shredded carrot",
            meta: ["shredded"],
            extendedName: "shredded carrot",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/sliced-carrot.png",
          },
          {
            id: 1069003,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "apple",
            original: "1 green apple,wash and diced",
            originalName: "green apple,wash and diced",
            meta: ["diced", "green"],
            extendedName: "green diced apple",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png",
          },
          {
            id: 11603,
            amount: 0.5,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Produce",
            name: "jicama",
            original: "1/2 cup jicama",
            originalName: "jicama",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/jicama.jpg",
          },
          {
            id: 9159,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "lime",
            original: "1 lime",
            originalName: "lime",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/lime.jpg",
          },
          {
            id: 9200,
            amount: 2.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "oranges",
            original: "2 fresh oranges",
            originalName: "fresh oranges",
            meta: ["fresh"],
            extendedName: "fresh oranges",
            image: "https://spoonacular.com/cdn/ingredients_100x100/orange.png",
          },
          {
            id: 10111251,
            amount: 1.0,
            unit: "head",
            unitLong: "head",
            unitShort: "head",
            aisle: "Produce",
            name: "romaine lettuce",
            original: "1 head romaine lettuce",
            originalName: "romaine lettuce",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/romaine.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 1129,
            amount: 2.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Milk, Eggs, Other Dairy",
            name: "hardboiled eggs",
            original: "2 hard boiled eggs",
            originalName: "hard boiled eggs",
            meta: [],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/hard-boiled-egg.png",
          },
          {
            id: 11529,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "tomato",
            original: "1 tomato",
            originalName: "tomato",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
          },
        ],
        unusedIngredients: [],
        likes: 0,
        title: "Green Salad With Fresh Orange Juice Dressing",
        image: "https://spoonacular.com/recipeImages/645514-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 643857,
        usedIngredientCount: 2,
        missedIngredientCount: 9,
        missedIngredients: [
          {
            id: 10211821,
            amount: 1.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Produce",
            name: "bell pepper",
            original: "1 whole diced bell pepper (capsicum)",
            originalName: "whole diced bell pepper (capsicum)",
            meta: ["diced", "whole", "(capsicum)"],
            extendedName: "whole diced bell pepper",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png",
          },
          {
            id: 1041009,
            amount: 0.75,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Cheese",
            name: "emmantel cheese",
            original: "3/4 cup shredded emmantel cheese",
            originalName: "shredded emmantel cheese",
            meta: ["shredded"],
            extendedName: "shredded emmantel cheese",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png",
          },
          {
            id: 11156,
            amount: 3.0,
            unit: "inches",
            unitLong: "inches",
            unitShort: "inches",
            aisle: "Produce",
            name: "long stem chives",
            original:
              "3 inches long stem chives, sliced in ¼ lengths (for color and flavor on top)",
            originalName:
              "long stem chives, sliced in ¼ lengths (for color and flavor on top)",
            meta: ["sliced in ¼ lengths (for color and flavor on top)"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/fresh-chives.jpg",
          },
          {
            id: 1077,
            amount: 0.25,
            unit: "cup",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Milk, Eggs, Other Dairy",
            name: "milk",
            original: "1/4 cup milk",
            originalName: "milk",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
          },
          {
            id: 11260,
            amount: 1.5,
            unit: "cups",
            unitLong: "cups",
            unitShort: "cup",
            aisle: "Produce",
            name: "various mushrooms",
            original: "1 1/2 cups various mushrooms, cleaned and sliced to fill",
            originalName: "various mushrooms, cleaned and sliced to fill",
            meta: ["cleaned", "sliced to fill"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/mushrooms-white.jpg",
          },
          {
            id: 11270,
            amount: 2.0,
            unit: "servings",
            unitLong: "servings",
            unitShort: "servings",
            aisle: "Produce",
            name: "mustard greens",
            original: "arugula or mustard greens (for color and flavor on top)",
            originalName:
              "arugula or mustard greens (for color and flavor on top)",
            meta: ["(for color and flavor on top)"],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/chinese-mustard-green.jpg",
          },
          {
            id: 1032009,
            amount: 0.5,
            unit: "teaspoon",
            unitLong: "teaspoons",
            unitShort: "tsp",
            aisle: "Spices and Seasonings",
            name: "chili flakes",
            original: "1/2 teaspoon red chili flakes (pepperoncin)",
            originalName: "red chili flakes (pepperoncin)",
            meta: ["red", "(pepperoncin)"],
            extendedName: "red chili flakes",
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/red-pepper-flakes.jpg",
          },
          {
            id: 11677,
            amount: 3.0,
            unit: "medium",
            unitLong: "mediums",
            unitShort: "medium",
            aisle: "Produce",
            name: "shallots",
            original: "3 medium shallots, sliced thin",
            originalName: "shallots, sliced thin",
            meta: ["sliced", "thin"],
            image: "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg",
          },
          {
            id: 16124,
            amount: 3.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Ethnic Foods;Condiments",
            name: "dashs of soy sauce",
            original: "3 dashs of soy sauce",
            originalName: "dashs of soy sauce",
            meta: [],
            image:
              "https://spoonacular.com/cdn/ingredients_100x100/soy-sauce.jpg",
          },
        ],
        usedIngredients: [
          {
            id: 1123,
            amount: 6.0,
            unit: "",
            unitLong: "",
            unitShort: "",
            aisle: "Milk, Eggs, Other Dairy",
            name: "eggs",
            original: "6 eggs",
            originalName: "eggs",
            meta: [],
            image: "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
          },
          {
            id: 11529,
            amount: 2.0,
            unit: "small",
            unitLong: "smalls",
            unitShort: "small",
            aisle: "Produce",
            name: "tomatoes",
            original: "2 small or (one large) tomatoes, deseeded and diced",
            originalName: "or (one large) tomatoes, deseeded and diced",
            meta: ["diced", "deseeded", "(one large)"],
            extendedName: "diced tomatoes",
            image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png",
          },
        ],
        unusedIngredients: [],
        likes: 0,
        title: "Frittata",
        image: "https://spoonacular.com/recipeImages/643857-312x231.jpg",
        imageType: "jpg",
      },
    ],
    offset: 0,
    number: 5,
    totalResults: 39,
  };