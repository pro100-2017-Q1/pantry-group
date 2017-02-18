var count = 0;
function incrementIngredientAmount(){
    document.getElementById("ingredientQuantity").innerHTML = count++;
}

function decrementIngredientAmount(){
    document.getElementById("ingredientQuantity").innerHTML = count--;
}