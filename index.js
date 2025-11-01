import { calcDuration, DurationFormat, titleCase } from './utils.js';

const getRecipeImage = id => `https://img.spoonacular.com/recipes/${id}-556x370.jpg`;

const similarRecipeCard = (recipe, i) => {
  const { id, title, readyInMinutes: minutes, servings } = recipe;

  const template = document.querySelector('#similar-recipes-template');
  const container = document.querySelector('#similar-recipe-list');
  const clone = template.content.cloneNode(true);

  const img = clone.querySelector('img');
  const image = i === 2 ? 'https://t3.ftcdn.net/jpg/02/36/88/12/360_F_236881295_odo9H1vtTZUvewumPdeRE4tHUtVa2UJg.jpg': getRecipeImage(id) 
  Object.assign(img, { src: image, alt: title });

  clone.querySelector('#recipe-title-similar').textContent = title;
  clone.querySelector('a').setAttribute('href', 'https://www.google.com');
  clone.querySelector('p').textContent = `${calcDuration(minutes, DurationFormat.SHORT)}`;
  clone.querySelector('h3').textContent = `serves ${servings}`;

  container.append(clone);
}
const displaySimilarRecipes = recipes => recipes.forEach(similarRecipeCard);
const showDishTypeTags = dishes => {
      const container = document.querySelector('#dish-list');
      dishes.forEach(dish =>{
        const template = document.querySelector('#dish-types-template');
        const clone = template.content.cloneNode(true);
        clone.querySelector('span').innerText = titleCase(dish);
        container.append(clone);
      });

}
// showDishTypeTags(['lunch', 'main course', 'main dish', 'dinner'])
const recipes = [
    {
    "id": 645707,
    "image": "Grilled-Figs-With-Blue-Cheese-and-Citrus-Honey-645707.jpg",
    "imageType": "jpg",
    "title": "Grilled Figs With Blue Cheese and Citrus Honey",
    "readyInMinutes": 45,
    "servings": 12,
    "sourceUrl": "https://www.foodista.com/recipe/PQMPGWMG/grilled-figs-with-blue-cheese-and-citrus-honey"
},
{
    "id": 647310,
    "image": "Honey-Glazed-Citrus-Roasted-Carrots-647310.jpg",
    "imageType": "jpg",
    "title": "Honey-Glazed Citrus-Roasted Carrots",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "https://www.foodista.com/recipe/VWMS5RF5/honey-glazed-citrus-roasted-carrots"
},
{
    "id": 639520,
    "image": "Citrus-Chicken-With-Apricot--Peanuts---Mint-639520.jpg",
    "imageType": "jpg",
    "title": "Citrus Chicken With Apricot, Peanuts & Mint",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "https://www.foodista.com/recipe/ZZX2G5Z6/citrus-chicken-with-apricot-peanuts-mint"
},
{
    "id": 634767,
    "image": "Beet-and-Blue-Cheese-Salad-with-Citrus-Vinaigrette-Dressing-634767.jpg",
    "imageType": "jpg",
    "title": "Beet and Blue Cheese Salad with Citrus Vinaigrette Dressing",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "https://www.foodista.com/recipe/RLCW4BRL/beet-and-blue-cheese-salad-with-citrus-vinaigrette-dressing"
}
];
recipes.at(-1).title+=' and Citrus Chicken With Apricot, Peanuts & Mint'
recipes.at(2).image = 'https://t3.ftcdn.net/jpg/02/36/88/12/360_F_236881295_odo9H1vtTZUvewumPdeRE4tHUtVa2UJg.jpg'
displaySimilarRecipes(recipes);
