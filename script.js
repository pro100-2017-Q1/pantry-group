
var pantry = {
    ingredients : [],
    addIngredient : function(name){
        this.ingredients.push(new Ingredient(name));
        console.log(name + "Added");

        var newItemDiv = document.createElement("div");
        newItemDiv.className = "form-group";

        var itemName = document.createElement("div"); 
        itemName.innerHTML = name;
        itemName.className = "col-sm-3";
        itemName.id = name + "Div";
        itemName.nodeName = name;

        var minusButton = document.createElement("button");
        minusButton.className = "col-sm-1";
        minusButton.innerHTML = "-";
        minusButton.type = "submit";
        minusButton.onclick = "decrementIngredientAmount(this)";
        minusButton.id = "decrement" + name + "Button";
        itemName.nodeName = name;

        var itemCount = document.createElement("p");
        itemCount.className = "col-sm-1";
        itemCount.id = name + "Quantity";
        itemCount.innerHTML = 1;
        itemName.nodeName = name;

        var addButton = document.createElement("button");
        addButton.className = "col-sm-1";
        addButton.innerHTML = "+";
        addButton.type = "submit";
        addButton.onclick = "incrementIngredientAmount(this)";
        addButton.id = "increment" + name + "Button";
        itemName.nodeName = name;

        document.getElementById("ingredientList").appendChild(newItemDiv);
        newItemDiv.appendChild(itemName);
        newItemDiv.appendChild(minusButton);
        newItemDiv.appendChild(itemCount);
        newItemDiv.appendChild(addButton);
    }
    

};

recipesList = {
    recipes : [],
  
    addRecipe : function(name, requiredIngredients, instructions, totalCalories, recipeImage){
        this.recipes.push(new Recipe(name, requiredIngredients, instructions, totalCalories, recipeImage)); 
        
    }
};

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
    ingredientEffected = button.name;
    console.log(button.name);
    console.log(ingredientEffected);
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
    
    this.requiredIngredients = document.getElementById('ingredientName').value
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