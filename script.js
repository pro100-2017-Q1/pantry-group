var pantry = {
    ingredients : [],
    addIngredient : function(name){
        this.ingredients.push(new Ingredient(name));
        console.log(name + "Added");
    }
};

var recipesList = {
    recipes : [],
    addRecipe : function(){
        this.recipes.push(new Recipe(name, requiredIngredients, instructions));    
    }
};

function handleIngredientAddClick(){
    var name = document.getElementById('ingredientAdded').value;
    console.log(name);
    pantry.addIngredient(name);
    console.log(pantry);
}

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
    this.requiredIngredients = requiredIngredients;
    //array of strings
    this.instructions = instructions;
    
    this.totalCalories = totalCalories;
    
    this.recipeImage = recipeImage;
}

function printUserInput(){
    var recipeName = document.getElementById('recipeName').value;
    var recipeInstructions = document.getElementById('recipeInstructions').value;
    var totalCalories = document.getElementById('calorieIntake').value;
    var ingredientName = document.getElementById('ingredientName').value;
    var ingredientNumber = document.getElementById('ingredientNumber').value;
    console.log(recipeName + " " + recipeInstructions + " " + totalCalories + " "+ ingredientName + " " + ingredientNumber);
}