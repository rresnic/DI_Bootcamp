import RecipeItem, {Ingredient} from "./RecipeItem";

export interface List {
    list:RecipeItem[];
    addItem(itemObj: RecipeItem): void;
    removeItem(id:string): void;
    load(): void;
    save(): void;
    clearList(): void;
}


export class RecipeCollection implements List {
    private _list: RecipeItem[]
    static instance: RecipeCollection = new RecipeCollection();

    constructor(list: RecipeItem[] = []) {
        this._list = list;
    }
    get list(): RecipeItem[]{
        return this._list;
    }
    addItem(itemObj: RecipeItem): void {
        this._list.push(itemObj);
        this.save();
    }
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save();
    }
    clearList(): void {
        this._list = [];
        this.save();
    }
    save(): void {
        localStorage.setItem("recipesList", JSON.stringify(this._list))
    }
    load(): void {
        const storedList:string | null = localStorage.getItem("recipesList")
        if(typeof storedList !== "string") return;
        const parsedList: {_id:string, _title:string, _ingredients:Ingredient[], _instructions: string,_isFavorite:boolean}[] = JSON.parse(storedList);
        parsedList.forEach((itemObj) =>{
            const newRecipeItem = new RecipeItem(itemObj._id, itemObj._title,  itemObj._ingredients, itemObj._instructions, itemObj._isFavorite);
            this._list.push(newRecipeItem)
        })
        this.save()
    }
}