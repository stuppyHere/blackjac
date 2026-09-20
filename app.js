/* funtion */
let landing = () => {
  cardContainer.style.display = "none";
  start.style.display = "inline-block";
  message = "Wanna play a round?"
  messageContainer.textContent = message
}

function pickNum() {
  return Math.floor(Math.random() * 11) + 1;
}

let sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};


let check = () => {
  if (mySum < 21 && dealerSum <= 21) {
    message = "Well wanna pull another card?";
    pull.style.display = "inline-block";
    nope.style.display = "inline-block";
    messageContainer.textContent = message
  } else if (mySum === 21 && dealerSum === 21) {
    if (dealer.length < my.length) {
      message = speMessage;
      speMessage = "";
    } else {
      message = "Draw, Nobody looses money";
      reset.style.display = "inline-block";
    }
    pull.style.display = "none";
    nope.style.display = "none";
    reset.style.display = "inline-block";
    home.style.display = "inline-block";
    messageContainer.textContent = message
  } else if (mySum === 21) {
    message = "Woah, Feeling lucky again?";
    pull.style.display = "none";
    nope.style.display = "none";
    reset.style.display = "inline-block";
    home.style.display = "inline-block";
    messageContainer.textContent = message
  } else if (dealerSum > 21) {
    message = "Woah , Dealer's luck suck this time wanna bet again?";
    pull.style.display = "none";
    nope.style.display = "none";
    reset.style.display = "inline-block";
    home.style.display = "inline-block";
    messageContainer.textContent = message
  } else if (mySum > 21) {
    pull.style.display = "none";
    nope.style.display = "none";
    reset.style.display = "inline-block";
    home.style.display = "inline-block";
    message = "Blehhh, Your luck is not lucking currently.. wanna bet again?";
    messageContainer.textContent = message
  }
};

let cardLoader = (array, container) => {
  let cards = "";
  container.innerHTML = "";
  for (let i of array) {
    cards += `<img class="cardp" src="pics/${i}_of_clubs.png">`;
  }

  container.innerHTML = cards;
};


let play = () => {
  my = [];
  dealer = [];
  myNum =2 
  dealerNum =2 
  cardLoader(my, myContainer);
  cardLoader(dealer, dealerContainer);
  if (balance < 100) {
    message = "You are Broke";
    messageContainer.textContent = message;
    addBal.style.display = "inline-block";
    start.style.display = "none";
  } else {
    start.style.display = "none";
    reset.style.display = "none";
    nope.style.display = "none";
    addBal.style.display = "none";
    reset.style.display = "none";
    home.style.display = "none";
    cardContainer.style.display = "flex";
    my[0] = pickNum();
    my[1] = pickNum();
    dealer[0] = pickNum();
    dealer[1] = pickNum();
    mySum = sum(my);
    dealerSum = sum(dealer);
    cardLoader(my, myContainer);
    cardLoader(dealer, dealerContainer);
    check();
  }
};

/* end of funtion block */

let my = [];
let dealer = [];
let mySum = 0;
let dealerSum = 0;
let message = "";
let speMessage = "";
let myNum = 2;
let dealerNum = 2;
let balance = localStorage.getItem("balance");
const start = document.querySelector("#start");
const pull = document.querySelector("#pull");
const nope = document.querySelector("#nop");
const messageContainer = document.querySelector("#message");
const addBal = document.querySelector("#add-bal");
const reset = document.querySelector("#re");
const home = document.querySelector("#home");
const cardContainer = document.querySelector("#cardContainer");
const myContainer = document.querySelector("#myCards");
const dealerContainer = document.querySelector("#dealerCards");

landing()
 
start.addEventListener("click", () => {
  play();
});

pull.addEventListener("click", () => {
  if (dealerSum === 21) {
    speMessage = "Woah, Dealers luck is really goign crazyy";
  } else {
    dealer[dealerNum] = pickNum();
    dealerSum = sum(dealer);
    cardLoader(dealer, dealerContainer);
    dealerNum++;
  }
  my[myNum] = pickNum();
  mySum = sum(my);
  cardLoader(my, myContainer);
  check();
  myNum++;
});

nope.addEventListener("click", () => {
  if (21 - mySum < 21 - dealerSum) {
    message = "Woah, Luck is crazy rn feeling lucky again?";
  } else if (dealer.length < my.length && dealerSum === 21) {
    message = speMessage;
    speMessage = "";
  }
  messageContainer.textContent = message
});




reset.addEventListener("click", () => {
  play();
});

home.addEventListener("click", () => {
  landing()
});

