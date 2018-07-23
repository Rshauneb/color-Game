var numSquares = 6;
var color =  generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var h2 = document.querySelector("h2");
var result = document.querySelector(".result");
var bg = document.querySelector(".blueBg");
var reset = document.getElementById('reset');
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

// changes the h2 to what color user is looking for
h2.innerHTML = pickedColor;

//easybtn
easyBtn.addEventListener("click", function(){
  result.innerHTML = "";
  bg.style.backgroundColor ="#3b5998"
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  color = generateRandomColors(numSquares);
  pickedColor = pickcolor();
  h2.innerHTML = pickedColor;

  for(var i = 0; i < square.length; i++){
    if(color[i]){
      square[i].style.backgroundColor = color[i];
    } else{
      square[i].style.display = "none";

    }
  }

})

//hardbtn
hardBtn.addEventListener("click", function(){
  result.innerHTML = "";
  bg.style.backgroundColor ="#3b5998"
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  color = generateRandomColors(numSquares);
  pickedColor = pickcolor();
  h2.innerHTML = pickedColor;

  for(var i = 0; i < square.length; i++){
      square[i].style.backgroundColor = color[i];
      square[i].style.display = "block";
    }
})

for (var i = 0; i < square.length; i++){
  //add colors to squares
  square[i].style.backgroundColor = color[i];

  //click event
  square[i].addEventListener("click", function(){
    // console.log("clicked " + color[i])

  //get color
  var clickedColor = this.style.backgroundColor;
  if(clickedColor === pickedColor){
    //changes span to correct
    result.textContent = "Correct!";
    // changes all boxes to correct color
    changeColors(clickedColor);
    //changes top backgorund to correct color
    bg.style.backgroundColor = clickedColor;

      reset.textContent = "play Again";

  }
  else{
    this.style.backgroundColor = "#232323";
    result.textContent = "Try Again!"
    console.log(clickedColor , pickedColor);
  }
  })
}

function changeColors(color){
  for (var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = color;
  }
}

function pickcolor(){
//picks a random number
var random = Math.floor(Math.random() * color.length);
return color[random];
//
}

function generateRandomColors(num){
  //make array
    arr = [];
  // num random colors to array
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a "red"  0 -255
  var r = Math.floor(Math.random() * 256);
  // pick a "green"  0 -255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue"  0 -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g + ", " + b +")";
}

// easy mode
// var easy = document.getElementById("easy");

//reset btn
reset.addEventListener("click", function(){
  // alert("clicked");
  result.innerHTML = "";
  color = generateRandomColors(numSquares);
  pickedColor = pickcolor();
  h2.innerHTML = pickedColor;

for(var i = 0; i < square.length; i++){
  square[i].style.backgroundColor = color[i];
}

bg.style.backgroundColor = "#3b5998";
reset.textContent = "New Game";
})
