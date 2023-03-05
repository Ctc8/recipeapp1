const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
let offset;
const NUMBER_OF_RECIPES_RETURNED = 1;

const populateRecipe = (id, title, ingredients, image) => {
  console.log(id, title, ingredients, image);
};

const getRecipes = (
  includedIngredientsArr,
  excludedIngredientsArr,
  newRequest = true
) => {
  if (newRequest) {
    offset = 0;
  }

  const params = {
    apiKey: APIKEY,
    offset: offset,
    number: NUMBER_OF_RECIPES_RETURNED,
    includeIngredients: includedIngredientsArr.toString(),
    excludeIngredients: excludedIngredientsArr.toString(),
    fillIngredients: true,
  };
  const requestURL = baseURL + "?" + new URLSearchParams(params).toString();

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((recipe) => {
        const ingredientsArr = [];
        recipe.missedIngredients.map((ingredient) => {
          ingredientsArr.push(ingredient.name);
        });
        recipe.usedIngredients.map((ingredient) => {
          ingredientsArr.push(ingredient.name);
        });
        populateRecipe(recipe.id, recipe.title, ingredientsArr, recipe.image);
      });
      offset += 5;
    })
    .catch((err) => {
      console.log(err);
    });
};

//getRecipes(['tomato', 'egg'], ['garlic']);
