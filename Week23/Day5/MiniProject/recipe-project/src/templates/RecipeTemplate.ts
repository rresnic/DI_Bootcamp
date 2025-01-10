import { RecipeCollection } from "../model/RecipeCollection";


export interface DOMList{
    div: HTMLDivElement;
    clear(): void;
    render(recipeCollection: RecipeCollection): void;
}

export default class RecipeTemplate implements DOMList {
    div: HTMLDivElement;
    static instance: RecipeTemplate = new RecipeTemplate();
    constructor(){
        this.div = document.getElementById("recipeContainer") as HTMLDivElement;
    }
    clear(): void {
        this.div.innerHTML = "";
    }
    render(recipeCollection: RecipeCollection): void {
        this.clear();
        recipeCollection.list.forEach((item) => {
            const li = document.createElement("div") as HTMLDivElement;
            li.className = "item";

            const check = document.createElement("input") as HTMLInputElement;
            check.type = "checkbox";
            check.id = item.id;
            check.checked = item.isFavorite;
            check.addEventListener("change", ()=> {
                item.isFavorite = !item.isFavorite;
                //fullList.save()
            })
            
            const label = document.createElement("label") as HTMLLabelElement;
            // label.htmlFor = item.id;
            label.className = "heart-checkbox"
            label.textContent = item.title;
            label.appendChild(check);
            const span = document.createElement("span") as HTMLSpanElement;
            span.className = "heart-icon";
    
            // Use SVG heart
            span.innerHTML = `
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            `;
            label.appendChild(span)
            li.appendChild(label);

            const detailsDiv = document.createElement("div") as HTMLDivElement;
            const ingredientUL = document.createElement("ul") as HTMLUListElement;
            item.ingredients.forEach((ingredient)=> {
                const myli = document.createElement("li") as HTMLLIElement;
                myli.textContent = `${ingredient.quantity} ${ingredient.measure}${ingredient.quantity > 1? "s":''} of ${ingredient.name}`;
                ingredientUL.appendChild(myli)
            })
            detailsDiv.appendChild(ingredientUL);
            const instructionsP = document.createElement("p") as HTMLParagraphElement;
            instructionsP.textContent = item.instructions;
            detailsDiv.append(instructionsP);
            detailsDiv.style.display= "inline-block";
            detailsDiv.style.marginLeft = "30px";
            detailsDiv.style.paddingRight = "15px";
            detailsDiv.style.verticalAlign = "top"; 
            li.appendChild(detailsDiv);
            const showButton = document.createElement("button") as HTMLButtonElement;
            showButton.textContent = "Hide details";
            showButton.style.display = "inline-block"
            showButton.className="button";
            showButton.type ="button"
            showButton.addEventListener("click", () => {
                detailsDiv.classList.toggle("hidden");
                if (detailsDiv.classList.contains("hidden")) {
                    showButton.textContent = "Show details";  
                } else {
                    showButton.textContent = "Hide details"; 
                }
            })
            li.prepend(showButton);

            const button = document.createElement("button") as HTMLButtonElement;
            button.textContent = "X";
            button.className="button";
            button.type ="button"
            button.addEventListener("click", () => {
                recipeCollection.removeItem(item.id);
                this.render(recipeCollection);
                // fullList.save()
            })
            li.appendChild(button);
            this.div.appendChild(li);
        })
    }
}