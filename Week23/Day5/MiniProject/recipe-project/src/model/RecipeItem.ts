export interface Ingredient {
    name: string;
    quantity: number;
    measure: string;
}
export interface RecipeI {
    id: string;
    title: string;
    ingredients: Ingredient[];
    instructions: string;
    isFavorite: boolean;
}

export default class RecipeItem implements RecipeI {
    private _id: string;
    private _title: string;
    private _ingredients: Ingredient[] = [];
    private _instructions: string;
    private _isFavorite: boolean;
    
    constructor(id:string, title:string, ingredients: Ingredient[], instructions:string, isFavorite: boolean){
        this._id = id;
        this._title = title;
        this._ingredients = ingredients;
        this._instructions = instructions;
        this._isFavorite = isFavorite;
    }
    get id(): string{
        return this._id;
    }
    get title(): string{
        return this._title;
    }
    get ingredients(): Ingredient[] {
        return this._ingredients;
    }
    get instructions(): string {
        return this._instructions;
    }
    get isFavorite(): boolean {
        return this._isFavorite;
    }
    set id(val: string) {
        this._id = val;
    }
    set ingredients(val: Ingredient[]) {
        this._ingredients = val;
    }
    set title(val: string) {
        this._title = val;
    }
    set instructions(val: string) {
        this._instructions = val;
    }
    set isFavorite(val: boolean) {
        this._isFavorite = val;
    }
}