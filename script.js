var pantry = [
    this.ingredients = [],
    this.addIngredient = function(name){
        this.ingredients.push(new Recipe(name));
        console.log(name + "Added");
    }
];

//var recipesList = [
//    this.recipes = [],
//    this.addRecipe = function(){
//        this.recipes.push(new Recipe(name, requiredIngredients, instructions));    
//    }
//];

function handleRecipeSaveClick(form){
    console.log(form.recipeName.value);
    console.log(recipesList);
    console.log(recipesList.addRecipe);
}

function handleIngredientAddClick(form){
    console.log(form.ingredientAdded.value);
    //pantry.addIngredient(form.ingredientAdded.value);
    console.log(pantry);
    console.log(pantry.addIngredient);
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
    
    this.name = document.getElementById('recipeName').value;
    //Array of ingredient objects with names and required amounts
    this.requiredIngredients = requiredIngredients;
    
    this.requiredIngredients = document.getElementById('recipeIngredients').value
    //array of strings
    this.instructions = instructions;
    this.instructions = document.getElementById('')
    
    this.totalCalories = totalCalories;
    
    this.totalCalories = document.getElementById('calorieIntake').value
    
    this.recipeImage = recipeImage;
}

function printUserInput(){
    var recipeName = document.getElementById('recipeName').value;
    var recipeInstructions = document.getElementById('recipeInstructions').value;
    var totalCalories = document.getElementById('calorieIntake').value;
    var ingredientName = document.getElementsByClassName('form-control myIngredientsNames');
    var ingredientNumber = document.getElementById('ingredientNumber').value;
    console.log(recipeName + " " + recipeInstructions + " " + totalCalories + " " + " " + ingredientNumber);
    for (var i=0; i < ingredientName.length; i++){
        var newIngredientList = ingredientName[i];
        console.log(newIngredientList);
    }
    //going to use JQuery to grab all ingredientName values and ingredient number values
    
}