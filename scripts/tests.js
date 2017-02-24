QUnit.test("Add Ingredient Test", function(assert){
    var oldHtml = document.getElementById('qunit-fixture').innerHTML;
    addIngredientFields();
    var newHtml = document.getElementById('qunit-fixture').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});

QUnit.test("Amount Change Test", function(assert){
    incrementIngredientAmount();
    var oldHtml = document.getElementById('ingredientQuantity').innerHTML;
    decrementIngredientAmount();
    var newHtml = document.getElementById('ingredientQuantity').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});
