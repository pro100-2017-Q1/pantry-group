function addIngredientFields(){
    var field = document.getElementById("addedIngredient");
    field.innerHTML += "<br/><form class='form-horizontal'><div class='form-group'><label class='control-label col-sm-2' for='ingredientName'></label><form method='POST'><div class='col-sm-4'><input type='text' class='form-control ingredientNames' name='myIngredientsNames' placeholder='Enter ingredient name'></div><div class='col-sm-2'><input type='number' class='form-control' id='ingredientNumber' placeholder='How many'></div></form>";
    var extraIngredientName = document.getElementsByName;
    document.getElementById('addIngredientSelected').onclick = function(){
        
        var valueOfNewIngredient = document.getElementById("newIngredientName");
        console.log(valueOfNewIngredient);
    }
}