var count = 0;
function incrementIngredientAmount(){
    count++;
    document.getElementById("ingredientQuantity").innerHTML = count;
    console.log(count);
}

function decrementIngredientAmount(){
    count--;
    document.getElementById("ingredientQuantity").innerHTML = count;
    console.log(count);
}