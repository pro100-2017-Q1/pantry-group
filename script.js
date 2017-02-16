var counter = 1;
var limit = 100;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<br><form method='POST'><div class='col-sm-7'><input type='text' class='form-control' name='myInputs[]' id='ingredientName' placeholder='Enter ingredient name'></div><div class='col-sm-5'><input type='number' class='form-control' id='ingredientNumber' placeholder='How many'></div></form>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}

function incrementIngredientAmount(){
    ingredientAmount = 0;
    document.getElementById("incrementIngredientButton").innerHTML = ingredientAmount ++;
}

function decrementIngredientAmount(){
    ingredientAmount = 0;
    document.getElementById("decrementIngredientButton").innerHTML = ingredientAmount --;
}
}

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

function Recipe(name, requiredIngredients, instructions){
    //String name of recipe
    this.name = name;
    //Array of ingredient objects with names and required amounts
    this.requirements = requiredIngredients;
    //array of strings
    this.instructions = instructions;
}

function addIngredient(name){
    pantry.ingredients.push(new Ingredient(name));
}

function addRecipe(name, requiredIngredients, instructions){
    pantry.recipes.push(new Recipe(name, requiredIngredients, instructions));
}
