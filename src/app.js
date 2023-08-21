// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.getElementById('cheese')
  if (state.Cheese){
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
}

function renderTomatoes() {
  let tomatoes = document.getElementById('tomato')
  if (state.Tomatoes){
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  let onion = document.getElementById('onion')
  if (state.Onions){
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
}

function renderLettuce() {
  let lettuce = document.getElementById('lettuce')
  if (state.Lettuce){
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").addEventListener('click', ()=>{
  state.Cheese = !state.Cheese;
  renderAll();
})
// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").addEventListener('click', ()=>{
  state.Tomatoes = !state.Tomatoes;
  renderAll();
})

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").addEventListener('click', ()=>{
  state.Onions = !state.Onions;
  renderAll();
})

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").addEventListener('click', ()=>{
  state.Lettuce = !state.Lettuce;
  renderAll();
})


function renderButtons() {
  const ingredients = ["Patty", "Cheese", "Onions", "Lettuce", "Tomatoes"];

  ingredients.forEach((ingredient) => {
    const buttonSelector = `.btn-${ingredient.toLowerCase()}`;
    const button = document.querySelector(buttonSelector);

    if (state[ingredient]) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
    let item = document.querySelectorAll(".items")
    for (let i=0; i< item.length;i++){
      let j =item[i].textContent
      if (state[j]!=true){
        item[i].style.display = 'none'
      }else{
    item[i].style.display = "block"
  }
    }
  }

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  let price = document.querySelector(".price-details")
  let total = wholeWheatBun
  for(let i in state){
    if(state[i]){
      total+=ingredients[i]
    }
  }
  price.textContent=`INR ${total}`;
}