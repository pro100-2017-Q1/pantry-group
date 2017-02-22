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