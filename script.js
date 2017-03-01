
var pantry = {
    ingredients : [],
    addIngredient : function(name){
        this.ingredients.push(new Ingredient(name));
        console.log(name + "Added");
    }

};

var recipesList = {
    recipes : [],
  
    addRecipe : function(name, requiredIngredients, instructions, totalCalories, recipeImage){
        this.recipes.push(new Recipe(name, requiredIngredients, instructions, totalCalories, recipeImage));    
    }
};

var weeklyMealPlan = {
    recipes : [], 

    addRecipeToPlan : function(name, requiredIngredients, instructions, totalCalories, recipeImage){
        this.recipes.push(new Recipe(name, requiredIngredients, instructions, totalCalories, recipeImage));
    },

    deleteRecipeFromPlan : function(name, requiredIngredients, instructions, totalCalories, recipeImage){
        this.recipes.splice(recipes.indexOf(name), 1);
    }
};

function handleMealPlanAddClick(){
    var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    weeklyMealPlan.addRecipeToPlan(recipeName);
    console.log(weeklyMealPlan);
}

function handleMealPlanDeleteClick(){
    var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    weeklyMealPlan.deleteRecipeFromPlan(recipeName);
    console.log(weeklyMealPlan);
}

function handleRecipeSaveClick(){
    var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    recipesList.addRecipe(recipeName);
    console.log(recipesList);
}

function handleIngredientAddClick(){
    var name = document.getElementById('ingredientAdded').value;
    console.log(name);
    pantry.addIngredient(name);
    console.log(pantry);
}

function incrementIngredientAmount(){
    document.getElementById("ingredientQuantity").innerHTML = 0;
    console.log();
}

function decrementIngredientAmount(){
    //pantry.ingredients[].count--;
    document.getElementById("ingredientQuantity").innerHTML = 0;
    console.log(0);
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
    
    this.requiredIngredients = document.getElementById('ingredientName').value;
    //array of strings
    this.instructions = instructions;
    this.instructions = document.getElementById('');
    
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

var recipeObject = { 'recipesList': recipesList.recipes};
console.log(recipesList.recipes);
console.log(recipeObject);

function storeRecipe(){
    localStorage.setItem('recipeObject', JSON.stringify(recipeObject));
    
}

function retrieveRecipe(){
    var retrievedRecipeObject = localStorage.getItem('recipeObject');
    console.log('retrievedRecipeObject: ', JSON.stringify(retrievedRecipeObject));
}