var pantry = {
    ingredients : [],
    addIngredient : function(){
        this.ingredients.push(new Ingredient());
        console.log(pantry);
        var name = document.getElementById("ingredientAdded").value;

        var newItemDiv = document.createElement("div");
        newItemDiv.className = "form-group";
        
        var emptyDiv = document.createElement("div");
        emptyDiv.className = "col-sm-3";
        
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
        itemCount.style = "text-align: center";
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
        secondEmptyDiv.className = "col-sm-3";

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

if (retrieveIngredientsArray() != null) {
        //console.log(retrieveIngredientsArray());
        pantry.ingredients = retrieveIngredientsArray();
}
function displayIngredients(ingredientArray){
        console.log("in display ingredients");
        for (var index = 0; index < ingredientArray.length; index++) {
            var item = ingredientArray[index];
             console.log(item);
            var newItemDiv = document.createElement("div");
            newItemDiv.className = "form-group";
            
            var emptyDiv = document.createElement("div");
            emptyDiv.className = "col-sm-3";

            var itemName = document.createElement("div");
            itemName.innerHTML = item.name;
            itemName.className = "col-sm-3";
            itemName.id = item.name + "Div";
            console.log(itemName);
            var minusButton = document.createElement("button");
            minusButton.className = "col-sm-1";
            minusButton.innerHTML = "-";
            minusButton.type = "submit";
            minusButton.onclick = decrementIngredientAmount;
            minusButton.id = item.name;

            var itemCount = document.createElement("p");
            itemCount.style = "text-align: center";
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
            secondEmptyDiv.className = "col-sm-3";

            document.getElementById("ingredientList").appendChild(newItemDiv);
            newItemDiv.appendChild(emptyDiv);
            newItemDiv.appendChild(itemName);
            newItemDiv.appendChild(minusButton);
            newItemDiv.appendChild(itemCount);
            newItemDiv.appendChild(addButton);
            newItemDiv.appendChild(secondEmptyDiv);   
    } 
}

recipesList = {
    recipes : [],
  
    addRecipe : function(){
        this.recipes.push(new Recipe()); 
        
    }
};

if(retrieveRecipes() != null){
    recipesList.recipes = retrieveRecipes();
}
console.log(recipesList.recipes);


var requirementNumber = 1;
function addIngredientFields(){
    
    var newIngredientDiv = document.createElement("div");
    newIngredientDiv.className = "form-group col-sm-12";
    newIngredientDiv.id = "requirementDiv"+requirementNumber;
    
    var testDiv = document.createElement("div");
    
    var newRequirementField = document.createElement("input");
    newRequirementField.className = "form-control";
    newRequirementField.type = "text";
    newRequirementField.id = "requirement"+requirementNumber;
    newRequirementField.placeholder = "Enter ingredient name";
    
    var test2Div = document.createElement("div");
    test2Div.className = "col-sm-2";

    var newRequirementAmount = document.createElement("input");
    newRequirementAmount.className = "form-control col-sm-9";
    newRequirementAmount.type = "number";
    newRequirementAmount.id = "requiredAmount"+requirementNumber;
    newRequirementAmount.placeholder = "How many";

    document.getElementById("requirements").appendChild(newIngredientDiv);
    newIngredientDiv.appendChild(testDiv);
    newIngredientDiv.appendChild(test2Div);
    newIngredientDiv.appendChild(newRequirementField);
    
    newIngredientDiv.appendChild(newRequirementAmount);
    

    requirementNumber++;    

}

function displayRecipes(){
    for (var index = 0; index < recipesList.recipes.length; index++) {
        var recipe = recipesList.recipes[index];

        recipeDiv = document.createElement("div");
        recipeDiv.id = recipe.name + "div";

        recipeNameDiv = document.createElement("div");
        recipeNameDiv.id = recipe.name;
        recipeNameDiv.innerHTML = recipe.name;

        recipeRequirements = document.createElement("ul");
        recipeRequirements.id = recipe.name + "Requirements";
        for (var index = 0; index < recipe.requiredIngredients.length; index++) {
            var item = recipe.requiredIngredients[index];
            requirementDiv = document.createElement("li");
            requirementDiv.id = item.name + "div";
            requirementDiv.innerHTML = item.name + ": " + findIngredient(item.name).count + " / " + item.count;
            recipeRequirements.appendChild(requirementDiv);
        }

        recipeInstructionsDiv = document.createElement("div");
        recipeInstructionsDiv.id = recipe.name + "Instructions";
        recipeInstructionsDiv.innerHTML = recipe.instructions;

        recipeCalorieDiv = document.createElement("div");
        recipeCalorieDiv.id = recipe.name + "Calories";
        recipeCalorieDiv.innerHTML = recipe.totalCalories;


        
        document.getElementById("ListOfRecipes").appendChild(recipeDiv);
        recipeDiv.appendChild(recipeNameDiv);
        recipeDiv.appendChild(recipeCalorieDiv);
        recipeDiv.appendChild(recipeRequirements);
        recipeDiv.appendChild(recipeInstructionsDiv);

    }
    


}

var weeklyMealPlan = {
    recipes : [], 

    addRecipeToPlan : function(){
        this.recipes.push(new Recipe());
    },

    deleteRecipeFromPlan : function(){
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
    // var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    recipesList.addRecipe();
    console.log(recipesList);
    for (var index = 1; index < requirementNumber; index++) {
        document.getElementById("requirements").removeChild(document.getElementById("requirementDiv"+index));
    }
    requirementNumber=1;
    storeRecipes();
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
    return 
}

function filterIngredients(){
    var filterTerm = document.getElementById("ingredientFilter").value;
    var filteredIngredients = [];
    var listOfIngredients = document.getElementById("ingredientList");
            for(var i = 0; i < listOfIngredients.childElementCount; i++){
                listOfIngredients.removeChild(listOfIngredients.childNodes[0])
                
            }
    if(filterTerm == ""){
        console.log(pantry.ingredients);
           displayIngredients(pantry.ingredients);
           
        }
        else{
            console.log(filterIngredients);
            for (var index = 0; index < pantry.ingredients.length; index++) {
                if (pantry.ingredients[index].name.toLowerCase() == filterTerm.toLowerCase() || pantry.ingredients[index].name.toLowerCase().startsWith(filterTerm.toLowerCase())) {
                console.log(pantry.ingredients[index].name);
                filteredIngredients.push(pantry.ingredients[index]);
                console.log("boop3");
                console.log(pantry.ingredients[index]);
                }
             }
            console.log(filteredIngredients);
            displayIngredients(filteredIngredients);
            
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

function Recipe(){
    //String name of recipe
    this.name = document.getElementById('recipeName').value;
    //Array of ingredient objects with names and required amounts
    requirements = [];
    for (var index = 0; index < requirementNumber; index++) {
        requirements.push(new Requirement(document.getElementById("requirement"+index).value, document.getElementById("requiredAmount"+index).value));
    }
    this.requiredIngredients = requirements;
    //array of strings
    this.instructions = document.getElementById('recipeInstructions').value;
        
    this.totalCalories = document.getElementById('calorieIntake').value
}

function storeRecipes(){
    localStorage.setItem('recipeObject', JSON.stringify(recipesList.recipes));
}

function retrieveRecipes(){
    var retrievedRecipeObject = JSON.parse(localStorage.getItem('recipeObject'));
    return retrievedRecipeObject;
}

function storeIngredientsArray(){
    localStorage.setItem('ingredients', JSON.stringify(pantry.ingredients));
    
}

function retrieveIngredientsArray(){
    var ingredients = JSON.parse(localStorage.getItem('ingredients'));
    return ingredients;
}

    
