var count = 0;

var pantry = [
    ingredients = [],
    recipes = []
];

function Ingredient(name){
    //String name of ingredient
    this.name = name;
    //Number of available units for this ingredient
    this.count = 1;
}

function Recipe(name, requiredIngredients, instructions, totalCalories, recipeImage){
    //String name of recipe
    this.name = name;
    //Array of ingredient objects with names and required amounts
    this.requirements = requiredIngredients;
    //array of strings
    this.instructions = instructions;
    
    this.totalCalories = Calories;
    
    this.recipeImage = recipeImage;
}

function addIngredient(name){
    pantry.ingredients.push(new Ingredient(name));
}

function addRecipe(name, requiredIngredients, instructions, totalCalories){
    pantry.recipes.push(new Recipe(name, requiredIngredients, instructions, totalCalories, recipeImage));
}
