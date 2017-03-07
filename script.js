
var pantry = {
    ingredients : [],
    addIngredient : function(){
        this.ingredients.push(new Ingredient());
        console.log(pantry);
        var name = document.getElementById("ingredientAdded").value;

        var newItemDiv = document.createElement("div");
        newItemDiv.className = "form-group";
        
        var emptyDiv = document.createElement("div");
        emptyDiv.className = "col-sm-1";
        
        var itemName = document.createElement("div"); 
        itemName.innerHTML = name;
        itemName.className = "col-sm-3";
        itemName.id = name + "Div";

        var minusButton = document.createElement("button");
        minusButton.className = "col-sm-1";
        minusButton.innerHTML = "-";
        minusButton.type = "submit";
        minusButton.onclick = decrementIngredientAmount;
        minusButton.id = name;

        var itemCount = document.createElement("p");
        itemCount.className = "col-sm-1";
        itemCount.id = name + "Quantity";
        itemCount.innerHTML = 1;

        var addButton = document.createElement("button");
        addButton.className = "col-sm-1";
        addButton.innerHTML = "+";
        addButton.type = "submit";
        addButton.onclick = incrementIngredientAmount;
        addButton.id = name;
        
        var secondEmptyDiv = document.createElement("div");
        secondEmptyDiv.className = "col-sm-1";

        document.getElementById("ingredientList").appendChild(newItemDiv);
        newItemDiv.appendChild(emptyDiv);
        newItemDiv.appendChild(itemName);
        newItemDiv.appendChild(minusButton);
        newItemDiv.appendChild(itemCount);
        newItemDiv.appendChild(addButton);
        newItemDiv.appendChild(secondEmptyDiv);
    }
};

console.log(pantry.ingredients);

function displayIngredients(){
    if (retrieveIngredientsArray() != null) {
        console.log(retrieveIngredientsArray());
        pantry.ingredients = retrieveIngredientsArray();
        for (var index = 0; index < pantry.ingredients.length; index++) {
            var item = pantry.ingredients[index];
            
            var newItemDiv = document.createElement("div");
            newItemDiv.className = "form-group";
            
            var emptyDiv = document.createElement("div");
            emptyDiv.className = "col-sm-1";

            var itemName = document.createElement("div");
            itemName.innerHTML = item.name;
            itemName.className = "col-sm-7";
            itemName.id = item.name + "Div";

            var minusButton = document.createElement("button");
            minusButton.className = "col-sm-1";
            minusButton.innerHTML = "-";
            minusButton.type = "submit";
            minusButton.onclick = decrementIngredientAmount;
            minusButton.id = item.name;

            var itemCount = document.createElement("p");
            itemCount.className = "col-sm-1";
            itemCount.id = item.name + "Quantity";
            itemCount.innerHTML = item.count;

            var addButton = document.createElement("button");
            addButton.className = "col-sm-1";
            addButton.innerHTML = "+";
            addButton.type = "submit";
            addButton.onclick = incrementIngredientAmount;
            addButton.id = item.name;
            
            var secondEmptyDiv = document.createElement("div");
            secondEmptyDiv.className = "col-sm-1";

            document.getElementById("ingredientList").appendChild(newItemDiv);
            newItemDiv.appendChild(emptyDiv);
            newItemDiv.appendChild(itemName);
            newItemDiv.appendChild(minusButton);
            newItemDiv.appendChild(itemCount);
            newItemDiv.appendChild(addButton);
            newItemDiv.appendChild(secondEmptyDiv);
        }   
    }    
}

recipesList = {
    recipes : [],
  
    addRecipe : function(){
        this.recipes.push(new Recipe()); 
        
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

function displayRecipesOnCaloriePage(){
    document.getElementById("recipeDisplay").innerHTML = recipesList;
    console.log(recipesList);
    console.log(weeklyMealPlan);
}

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

function incrementIngredientAmount(button){
    console.log(button)
    ingredientEffected = findIngredient(button.path[0].id);
    console.log(ingredientEffected);
    currentName = ingredientEffected.name;
    ingredientEffected.count++;
    document.getElementById(currentName + "Quantity").innerHTML = ingredientEffected.count;
}

function findIngredient(ingredToFind){
    for (var index = 0; index < pantry.ingredients.length; index++) {
        if (pantry.ingredients[index].name == ingredToFind) {
            return pantry.ingredients[index];
        }
    }
}

function decrementIngredientAmount(button){
    ingredientEffected = findIngredient(button.path[0].id);
    console.log(ingredientEffected);
    if(ingredientEffected.count > 0){
        ingredientEffected.count--;
    }
    document.getElementById(ingredientEffected.name + "Quantity").innerHTML = ingredientEffected.count;
}

function Ingredient(){
    //String name of ingredient
    this.name = document.getElementById("ingredientAdded").value;
    //Number of available units for this ingredient
    this.count = 1;
}

function Requirement(name, count){
    //String name of ingredient
    this.name = name;
    //Number of available units for this ingredient
    this.count = count;
}

function Recipe(name, requiredIngredients, instructions, totalCalories, recipeImage){
    //String name of recipe
    this.name = document.getElementById('recipeName').value;
    //Array of ingredient objects with names and required amounts
    this.requiredIngredients = document.getElementById('ingredientName').value;
    //array of strings
    this.instructions = document.getElementById('recipeInstructions').value;
        
    this.totalCalories = document.getElementById('calorieIntake').value
    
    this.recipeImage = recipeImage;
}




var recipeObject = { 'recipesList': recipesList.recipes};

function storeRecipe(){
    localStorage.setItem('recipeObject', JSON.stringify(recipeObject));
    
}

function retrieveRecipe(){
    var retrievedRecipeObject = localStorage.getItem('recipeObject');
    console.log('retrievedRecipeObject: ', JSON.stringify(retrievedRecipeObject));
}

function storeIngredientsArray(){
    localStorage.setItem('ingredients', JSON.stringify(pantry.ingredients));
    
}

function retrieveIngredientsArray(){
    var ingredients = JSON.parse(localStorage.getItem('ingredients'));
    return ingredients;
}


function handleCreateRecipeClick(){
    var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    var recipeInstructions = document.getElementById('recipeInstructions').value;
    console.log(recipeInstructions);
    var totalCalories = document.getElementById('calorieIntake').value;
    console.log(totalCalories);
    var ingredientsNames = document.getElementsByClassName('ingredientNames');
    var ingredientsNumber = document.getElementsByClassName('ingredientNumber');
    
    for(var i=0, j=0; i < ingredientsNames.length, j < ingredientsNumber.length; i++, j++){
        var combineNameNumber = ingredientsNames[i].value.concat.ingredientsNumber[j].value;
        console.log(combineNameNumber);
        
    }    
}

    
