const baseRequestURL = "https://api.spoonacular.com/recipes/complexSearch";
const baseInfoURL = "https://api.spoonacular.com/recipes/";
let offset;
const NUMBER_OF_RECIPES_RETURNED = 10;
const APIKEY = "256b1e5157cb498d9d521793e07334f0";

const getURL = (id, callback) => {
  const params = {
    apiKey: APIKEY,
  };

  const requestURL =
    baseInfoURL +
    id +
    "/information" +
    "?" +
    new URLSearchParams(params).toString();

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      callback(data.sourceUrl);
    });
};



const getRecipes = (newRequest = true) => {
document.getElementById("recipe-list").innerHTML = '';

  if (newRequest) {
    offset = 0;
  }
  let includedIngredients = [];
  let excludedIngredients = [];
  includedIngredients = includeIngredientsTextBox.tags_list.map((tag) => {
    return tag.text;
  });
  excludedIngredients = excludeIngredientsTextBox.tags_list.map((tag) => {
    return tag.text;
  });

  const params = {
    apiKey: APIKEY,
    offset: offset,
    number: NUMBER_OF_RECIPES_RETURNED,
    includeIngredients: includedIngredients.toString(),
    excludeIngredients: excludedIngredients.toString(),
    fillIngredients: true,
  };

  const requestURL =
    baseRequestURL + "?" + new URLSearchParams(params).toString();

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
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
      offset += NUMBER_OF_RECIPES_RETURNED;
    })
    .catch((err) => {
      console.log(err);
    });
};
