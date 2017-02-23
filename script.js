var pantry = [
    this.ingredients = [],
    this.addIngredient = function(){
        this.ingredients.push(new Recipe(name));
    }
    
];

var recipesList = [
    this.recipes = [],
    this.addRecipe = function(){
        this.recipes.push(new Recipe(name, requiredIngredients, instructions));
    }
]

function Ingredient(name){
    //String name of ingredient
    this.name = name;
    //Number of available units for this ingredient
    this.count = 1;

    this.printInfo = function(){
        console.log("Ingredient name: " + name + ", Amount available:" + count);
    }
}

function Requirement(name, count){
    //String name of ingredient
    this.name = name;
    //Number of available units for this ingredient
    this.count = count;

    this.printInfo = function(){
        console.log("Ingredient needed: " + name + ", Amount needed:" + count);
    }
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