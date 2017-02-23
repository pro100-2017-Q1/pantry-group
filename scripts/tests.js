QUnit.test("Add Ingredient Test", function(assert){
    var oldHtml = document.getElementById('qunit-fixture').innerHTML;
    addInput('qunit-fixture')
    var newHtml = document.getElementById('qunit-fixture').innerHTML;
    assert.notEqual(oldHtml, newHtml);
});