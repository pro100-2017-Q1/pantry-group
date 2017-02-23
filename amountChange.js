var count = 0;
function incrementIngredientAmount(){
    document.getElementById("ingredientQuantity").innerHTML = count++;
    console.log("boop");
}

function decrementIngredientAmount(){
    document.getElementById("ingredientQuantity").innerHTML = count--;
}