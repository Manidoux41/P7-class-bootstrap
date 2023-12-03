import { recipes } from "../data/recipes.js";
import { RecipesList } from "./components/RecipesList.js";
import { createElement } from "./functions/dom.js";

try {
    const recettes = recipes;
    console.log(recettes);
    const recettesList = new RecipesList(recettes);
    recettesList.appendTo(document.querySelector('#recipes-list'));  
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger',
        role: 'alert'
    });
    alertElement.innerText = 'Impossible de charger les recettes';
    document.body.prepend(alertElement);
}

