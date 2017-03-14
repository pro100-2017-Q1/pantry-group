// potato
var pantry = {
    ingredients: [],
    addIngredient: function (isNew) {
        var name = document.getElementById("ingredientAdded").value.toProperCase();
        
        if (isNew) {
            name = name.toProperCase();
            //alert(name);
            this.ingredients.push(new Ingredient());
            console.log(pantry);

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
        } else {
            name = name.toProperCase();
            var currentIngredient = findIngredient(name);
            currentIngredient.count++;
            document.getElementById(name + "Quantity").innerHTML = currentIngredient.count;
        }
    }
};

console.log(pantry.ingredients);

if (retrieveIngredientsArray() != null) {
    //console.log(retrieveIngredientsArray());
    pantry.ingredients = retrieveIngredientsArray();
}
function displayIngredients(ingredientArray) {
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
    recipes: [],

    addRecipe: function () {
        this.recipes.push(new Recipe());

    }
};

if (retrieveRecipes() != null) {
    recipesList.recipes = retrieveRecipes();
}
console.log(recipesList.recipes);


var requirementNumber = 1;
function addIngredientFields() {

    var newIngredientDiv = document.createElement("div");
    newIngredientDiv.className = "form-group col-sm-12";
    newIngredientDiv.id = "requirementDiv" + requirementNumber;

    var testDiv = document.createElement("div");

    var newRequirementField = document.createElement("input");
    newRequirementField.className = "form-control";
    newRequirementField.type = "text";
    newRequirementField.id = "requirement" + requirementNumber;
    newRequirementField.placeholder = "Enter ingredient name";

    var test2Div = document.createElement("div");
    test2Div.className = "col-sm-2";

    var newRequirementAmount = document.createElement("input");
    newRequirementAmount.className = "form-control col-sm-9";
    newRequirementAmount.type = "number";
    newRequirementAmount.id = "requiredAmount" + requirementNumber;
    newRequirementAmount.placeholder = "How many";

    document.getElementById("requirements").appendChild(newIngredientDiv);
    newIngredientDiv.appendChild(testDiv);
    newIngredientDiv.appendChild(test2Div);
    newIngredientDiv.appendChild(newRequirementField);

    newIngredientDiv.appendChild(newRequirementAmount);


    requirementNumber++;

}

function displayRecipes() {
    for (var index = 0; index < recipesList.recipes.length; index++) {
        var recipe = recipesList.recipes[index];

        recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("class", "recipeDiv");
        recipeDiv.id = recipe.name + "div";

        recipeNameDiv = document.createElement("div");
        recipeNameDiv.id = recipe.name;
        recipeNameDiv.setAttribute("class", "recipeName");
        recipeNameDiv.innerHTML = recipe.name + "<br />";

        recipeRequirements = document.createElement("ul");
        recipeRequirements.id = recipe.name + "Requirements";
        recipeRequirements.setAttribute("class", "recipeIngredient");
        for (var i = 0; i < recipe.requiredIngredients.length; i++) {
            var item = recipe.requiredIngredients[i];
            requirementDiv = document.createElement("li");
            requirementDiv.id = item.name + "div";
            requirementDiv.innerHTML = "Ingredients: " + "<br />" + item.name + ": " + findIngredient(item.name).count + " / " + item.count + "<br />";
            recipeRequirements.appendChild(requirementDiv);
        }

        recipeInstructionsDiv = document.createElement("div");
        recipeInstructionsDiv.id = recipe.name + "Instructions";
        recipeInstructionsDiv.setAttribute("class", "recipeInstructions");
        recipeInstructionsDiv.innerHTML = "Instructions: " + "<br />" + recipe.instructions + "<br />";

        recipeCalorieDiv = document.createElement("div");
        recipeCalorieDiv.id = recipe.name + "Calories";
        recipeCalorieDiv.setAttribute("class", "recipeCalorie");
        recipeCalorieDiv.innerHTML = "Calories: " + "<br />" + recipe.totalCalories + "<br />";


        document.getElementById("ListOfRecipes").appendChild(recipeDiv);
        recipeDiv.appendChild(recipeNameDiv);
        recipeDiv.appendChild(recipeInstructionsDiv);
        recipeDiv.appendChild(recipeCalorieDiv);
        recipeDiv.appendChild(recipeRequirements);

    }
}

function findIngredientCount(name) {
    if (findIngredient(name) == 0) {
        return 0;
    } else {
        return findIngredient(name).count;
    }
}

var weeklyMealPlan = {
    recipes: [],

    addRecipeToPlan: function () {
        this.recipes.push(new Recipe());
    },

    deleteRecipeFromPlan: function () {
        this.recipes.splice(recipes.indexOf(name), 1);
    }
};

function displayRecipesOnCaloriePage() {
    for (var index = 0; index < recipesList.recipes.length; index++) {
        var recipe = recipesList.recipes[index];
        recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("class", "recipeDiv");
        recipeDiv.id = recipe.name + "div";

        recipeNameDiv = document.createElement("div");
        recipeNameDiv.id = recipe.name;
        recipeNameDiv.setAttribute("class", "recipeName");
        recipeNameDiv.innerHTML = recipe.name + "<br />";

        recipeCalorieDiv = document.createElement("div");
        recipeCalorieDiv.id = recipe.name + "Calories";
        recipeCalorieDiv.setAttribute("class", "recipeCalorie");
        recipeCalorieDiv.innerHTML = "Calories: " + "<br />" + recipe.totalCalories + "<br />";

        addButton = document.createElement("input");
        addButton.setAttribute("class", "addButton");
        addButton.value = "Add";
        addButton.type = "button";
        addButton.onclick = handleMealPlanAddClick;
        addButton.id = "addButton"+index;

        minusButton = document.createElement("input");
        minusButton.setAttribute("class", "minusButton");
        minusButton.type = "button";
        minusButton.value = "Del";
        minusButton.onclick = handleMealPlanDeleteClick;
        minusButton.id = "minusButton"+index;

        document.getElementById("ListOfCalorieRecipes").appendChild(recipeDiv);
        recipeDiv.appendChild(recipeNameDiv);
        recipeDiv.appendChild(recipeCalorieDiv);
        recipeDiv.appendChild(addButton);
        recipeDiv.appendChild(minusButton);

    }

    console.log(recipesList);
    console.log(weeklyMealPlan);
}



function handleMealPlanAddClick() {
    var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    weeklyMealPlan.addRecipeToPlan(recipeName);
    console.log(weeklyMealPlan);
}

function handleMealPlanDeleteClick() {
    var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    weeklyMealPlan.deleteRecipeFromPlan(recipeName);
    console.log(weeklyMealPlan);
}

function handleRecipeSaveClick() {
    // var recipeName = document.getElementById('recipeName').value;
    console.log(recipeName);
    recipesList.addRecipe();
    console.log(recipesList);
    for (var index = 1; index < requirementNumber; index++) {
        document.getElementById("requirements").removeChild(document.getElementById("requirementDiv" + index));
    }
    requirementNumber = 1;
    storeRecipes();
}

function handleIngredientAddClick() {
    var name = document.getElementById('ingredientAdded').value;
    console.log(name);
    pantry.addIngredient(name);
    console.log(pantry);
}

function incrementIngredientAmount(button) {
    console.log(button)
    ingredientEffected = findIngredient(button.path[0].id);
    console.log(ingredientEffected);
    currentName = ingredientEffected.name;
    ingredientEffected.count++;
    document.getElementById(currentName + "Quantity").innerHTML = ingredientEffected.count;
}

function findIngredient(ingredToFind) {
    for (var index = 0; index < pantry.ingredients.length; index++) {
        if (pantry.ingredients[index].name == ingredToFind) {
            return pantry.ingredients[index];
        }
    }
    return 0;
}

function filterIngredients() {
    var filterTerm = document.getElementById("ingredientFilter").value;
    var filteredIngredients = [];
    var listOfIngredients = document.getElementById("ingredientList");
    var count = listOfIngredients.childNodes.length;
    for (var i = 0; i < count; i++) {
        listOfIngredients.removeChild(listOfIngredients.childNodes[0])

    }
    if (filterTerm == "") {
        console.log(pantry.ingredients);
        displayIngredients(pantry.ingredients);

    }
    else {
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

function decrementIngredientAmount(button) {
    ingredientEffected = findIngredient(button.path[0].id);
    console.log(ingredientEffected);
    if (ingredientEffected.count > 0) {
        ingredientEffected.count--;
    }
    if (ingredientEffected.count <= 0) {
        console.log(pantry.ingredients[pantry.ingredients.indexOf(ingredientEffected)])
        pantry.ingredients.splice(pantry.ingredients.indexOf(ingredientEffected), 1);
        location.reload();
    }
    document.getElementById(ingredientEffected.name + "Quantity").innerHTML = ingredientEffected.count;
}

function Ingredient() {
    //String name of ingredient
    this.name = document.getElementById("ingredientAdded").value.toProperCase();
    //Number of available units for this ingredient
    this.count = 1;
}

function Requirement(name, count) {
    //String name of ingredient
    this.name = name;
    //Number of available units for this ingredient
    this.count = count;
}

function Recipe() {
    //String name of recipe
    this.name = document.getElementById('recipeName').value;
    //Array of ingredient objects with names and required amounts
    requirements = [];
    for (var index = 0; index < requirementNumber; index++) {
        requirements.push(new Requirement(document.getElementById("requirement" + index).value, document.getElementById("requiredAmount" + index).value));
    }
    this.requiredIngredients = requirements;
    //array of strings
    this.instructions = document.getElementById('recipeInstructions').value;

    this.totalCalories = document.getElementById('calorieIntake').value;
}

function storeRecipes() {
    localStorage.setItem('recipeObject', JSON.stringify(recipesList.recipes));
}

function retrieveRecipes() {
    var retrievedRecipeObject = JSON.parse(localStorage.getItem('recipeObject'));
    return retrievedRecipeObject;
}

function storeIngredientsArray() {
    localStorage.setItem('ingredients', JSON.stringify(pantry.ingredients));

}

function retrieveIngredientsArray() {
    var ingredients = JSON.parse(localStorage.getItem('ingredients'));
    return ingredients;
}

function validateForm() {
    var x = document.forms["recipeForm"]["recipeName"].value.toProperCase();
    if (x == "") {
        alert("Recipe has no name");
        return false;
    } else {
        handleRecipeSaveClick();
    }
}

String.prototype.toProperCase = function () {
    return this.replace(/\w*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function validateIngredient() {
    var x = document.forms["ingredientForm"]["ingredientAdded"].value;
    x = x.toProperCase();
    var addNew = true;
    for (var i = 0; i < pantry.ingredients.length; i++) {
        if (x == pantry.ingredients[i].name) {
            addNew = false;
            break;
        } else {
            addNew = true;
        }
    }
    pantry.addIngredient(addNew);
}

function updateCalorieCount(){
    var userInputCalorie = document.getElementById('calorieIntake').value;
    document.getElementById('calorieCounter').value = userInputCalorie;
    calorieDiv.innerHTML=userInputCalorie;
    
}

function calculateWeeklyCalories(){
    var caloriesInMealPlan = document.getElementById('calorieCounter').value;
    var totalCaloriesFromMealsInPlan = 0;
    for (var index = 0; index < recipesList.recipes.length; index++) {
        var recipe = weeklyMealPlan.recipes[index];
        totalCaloriesFromMealsInPlan += recipe.totalCalories;
        
    }
    if(caloriesInMealPlan < totalCaloriesFromMealsInPlan){
        newFunctionToDisplayRecipes();
    }
}

function newFunctionToDisplayRecipes(){
    for (var index = 0; index < weeklyMealPlan.recipes.length; index++) {
        var recipe = recipesList.recipes[index];
        recipeDiv = document.createElement("div");
        recipeDiv.setAttribute("class", "recipeDiv");
        recipeDiv.id = recipe.name + "div";

        recipeNameDiv = document.createElement("div");
        recipeNameDiv.id = recipe.name;
        recipeNameDiv.setAttribute("class", "recipeName");
        recipeNameDiv.innerHTML = recipe.name + "<br />";

        recipeCalorieDiv = document.createElement("div");
        recipeCalorieDiv.id = recipe.name + "Calories";
        recipeCalorieDiv.setAttribute("class", "recipeCalorie");
        recipeCalorieDiv.innerHTML = "Calories: " + "<br />" + recipe.totalCalories + "<br />";

        addButton = document.createElement("input");
        addButton.setAttribute("class", "addButton");
        addButton.value = "Add";
        addButton.type = "button";
        addButton.onclick = handleMealPlanAddClick;
        addButton.id = "addButton"+index;

        minusButton = document.createElement("input");
        minusButton.setAttribute("class", "minusButton");
        minusButton.type = "button";
        minusButton.value = "Del";
        minusButton.onclick = handleMealPlanDeleteClick;
        minusButton.id = "minusButton"+index;

        document.getElementById("ListOfCalorieRecipes").appendChild(recipeDiv);
        recipeDiv.appendChild(recipeNameDiv);
        recipeDiv.appendChild(recipeCalorieDiv);
        recipeDiv.appendChild(addButton);
        recipeDiv.appendChild(minusButton);

    }
}




