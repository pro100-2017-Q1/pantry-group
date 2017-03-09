QUnit.test("Add Ingredient Test", function(assert){
    var oldHtml = document.getElementById('qunit-fixture').innerHTML;
    addIngredientFields();
    var newHtml = document.getElementById('qunit-fixture').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});

// QUnit.test("Image Upload Test" ,function(assert){
//     var oldHtml = document.getElementById('PreviewImageID').innerHTML;
//     PreviewImage(event);
//     var newHtml = document.getElementById('PreviewImageID').innerHTML;
//     assert.notEqual(oldHtml,newHtml);
// });
