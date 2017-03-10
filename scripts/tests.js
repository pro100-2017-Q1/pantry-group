var ingredientTestArray = [new Ingredient()];
QUnit.test("Add Ingredient Fields Test", function(assert){
    var oldHtml = document.getElementById('qunit-fixture').innerHTML;
    addIngredientFields();
    var newHtml = document.getElementById('qunit-fixture').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});

QUnit.test("Get Ingredient Test", function(assert){
    assert.ok(findIngredient("Apple"), "Item found");
    assert.notOk(findIngredient("Carrot"), "Item not found");
});

QUnit.test("Display Ingredients Test", function(assert){
    var oldHtml = document.getElementById("ingredientList").innerHTML;
    displayIngredients(ingredientTestArray);
    var newHtml = document.getElementById("ingredientList").innerHTML;
    assert.notEqual(oldHtml, newHtml);
});

QUnit.test("Display Recipe Test", function(assert){
    var oldHtml = document.getElementById('ListOfRecipes').innerHTML;
    displayRecipes();
    var newHtml = document.getElementById('ListOfRecipes').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});

QUnit.test("Display Recipes on Calorie Page Test", function(assert){
    var oldHtml = document.getElementById('recipeDisplay').innerHTML;
    displayRecipesOnCaloriePage();
    var newHtml = document.getElementById('recipeDisplay').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});

QUnit.test("Handle Meal Plan Add Test", function(assert){
    var oldLength = weeklyMealPlan.recipes.length;
    handleMealPlanAddClick();
    assert.notEqual(oldLength,weeklyMealPlan.recipes.length);
});
