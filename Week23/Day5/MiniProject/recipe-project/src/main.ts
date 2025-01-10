import './style.css'
import './css/style.css'
import { RecipeCollection } from './model/RecipeCollection';
import RecipeItem, { Ingredient } from './model/RecipeItem';
import RecipeTemplate from './templates/RecipeTemplate';
import { v4 as uuidv4 } from 'uuid';


const initApp = (): void => {
    const recipeCollection = RecipeCollection.instance;
    const template = RecipeTemplate.instance;
    // add listener
    const itemEntryForm = document.getElementById("recipeEntryForm") as HTMLFormElement;
    itemEntryForm.addEventListener("submit", (e: SubmitEvent ):void => {
      e.preventDefault();
      const titleInput = document.getElementById("recipeTitle") as HTMLInputElement;
      const ingredientInput = document.getElementById("ingredients") as HTMLTextAreaElement;
      const instructionInput = document.getElementById("instructions") as HTMLTextAreaElement;
      const newEntryTitleText: string = titleInput.value.trim();
      const instructionsText: string = instructionInput.value.trim();
      const ingredientsContent: string = ingredientInput.value;
      const ingredientLines: string[] = ingredientsContent.split("\n")
      let ingredients: Ingredient[] = [];
      ingredientLines.forEach((line) => {
        const parts: string[] = line.trim().split(" ");
        if(parts.length !== 3) return; // incomplete ingredients
        const [name, amountStr, measure] = parts;
        const quantity = parseFloat(amountStr);
        if(isNaN(quantity)) return
        ingredients.push({name, quantity, measure})
      })

      if(!newEntryTitleText || !(ingredients.length) || !instructionsText) return;
      const newItem = new RecipeItem(uuidv4(), newEntryTitleText, ingredients, instructionsText, false);
      recipeCollection.addItem(newItem);
      template.render(recipeCollection);
    })
    recipeCollection.load();
    template.render(recipeCollection);
  
    const clearList = document.getElementById("clearRecipesButton") as HTMLButtonElement;
    clearList.addEventListener("click", ()=>{
      recipeCollection.clearList();
      template.clear();
    })
  }
  
  document.addEventListener("DOMContentLoaded", initApp);