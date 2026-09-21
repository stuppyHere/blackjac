/* first js for this game after dat got replced by app.js */

let a = []
let num 
let sum = 0;
let balance = 1000;
let money = 0;
document.getElementById("ball").innerHTML = balance;
document.getElementById("message").innerText = "Wanna play a round?"
function start() {
  if(balance <=0){
    document.getElementById("message").innerHTML = "You're broke! Game over.";
    document.getElementById("start").style.display = "none";
    document.getElementById("re").style.display = "none";
    document.getElementById("pull").style.display = "none";
    document.getElementById("sum").style.display = "none";
    document.getElementById("pay").style.display = "inline-block";
     for(let cardshii=1 ; cardshii <=11 ; cardshii++){
    document.getElementById(`card${cardshii}`).style.display="none"
    }
  }
 else{
  num = 1;
  a[0] = pickNum();
  a[1] = pickNum();
  sum = a[0] + a[1];
  /* for(let cardshii=1 ; cardshii <=11 ; cardshii++){
    document.getElementById(`card${cardshii}`).style.display="none"
  } */
  
  load()
  document.getElementById("sum").style.display= "block"
  document.getElementById("sum").innerText = "sum: " + sum;

  if (sum <= 20) {
    document.getElementById("start").style.display = "none";
    document.getElementById("re").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("pull").style.display = "inline-block";
    document.getElementById("nop").style.display = "inline-block";
    document.getElementById("message").innerHTML = "wanna pull cards?";
  } else if (sum === 21) {
    balance += 100;
    document.getElementById("ball").innerHTML = "balance:$" + balance;
    document.getElementById("message").innerHTML = "Damn you got lucky huh";
    document.getElementById("pull").style.display = "none";
    document.getElementById("nop").style.display = "none";
    document.getElementById("re").style.display = "inline-block";
    
  } else {
    document.getElementById("start").style.display = "none";
    document.getElementById("pull").style.display = "none";
    document.getElementById("nop").style.display = "none";
    document.getElementById("re").style.display = "inline-block";
    balance -= 100;
    document.getElementById("message").innerHTML = "try again may be u will win";
    document.getElementById("ball").innerHTML = "balance:$" + balance;
  }
  } 
 
}

function pickNum() {
  return Math.floor(Math.random() * 11) + 1;
}



 function pull(){
  num +=1;
  a[num] = pickNum()
  sum += a[num];
  load()
  document.getElementById("sum").innerText = "sum: " + sum;
  if (sum <= 20) {
    document.getElementById("start").style.display = "none";
    document.getElementById("re").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("pull").style.display = "inline-block";
    document.getElementById("nop").style.display = "inline-block";
    document.getElementById("message").innerHTML = "wanna pull cards?";
  } else if (sum === 21) {
    balance += 100;
    document.getElementById("ball").innerHTML = "balance:$" + balance;
    document.getElementById("message").innerHTML = "Damn you got lucky huh";
     document.getElementById("pull").style.display = "none";
    document.getElementById("nop").style.display = "none";
    document.getElementById("re").style.display = "inline-block";
  } else {
     document.getElementById("start").style.display = "none";
    document.getElementById("pull").style.display = "none";
    document.getElementById("nop").style.display = "none";
    document.getElementById("re").style.display = "inline-block";
    document.getElementById("home").style.display = "inline-block";
    balance -= 100;
    document.getElementById("message").innerHTML = "try again may be u will win";
    document.getElementById("ball").innerHTML = "balance:$" + balance;
  }
} 

/* function does(){
  for(let shii of a){
    let cardElement = document.getElementById(`card${shii}`);
    if(cardElement){
        cardElement.style.display="block"
    }
    
  }
}  */

function nop(){
      balance -= 100;
        document.getElementById("ball").innerHTML = balance;


  home()
}

function home(){
 /*  for(let cardshii=1 ; cardshii <=11 ; cardshii++){
    document.getElementById(`card${cardshii}`).style.display="none"
  } */
  document.getElementById("message").innerText = "Wanna play a round?"
  document.getElementById("sum").style.display= "none"
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("pull").style.display = "none";
  document.getElementById("nop").style.display = "none";
  document.getElementById("re").style.display = "none";
  document.getElementById("home").style.display = "none";
  load()
}

function five(){
  money = 500;
}
function ten(){
  money= 1000;
}
function one(){
  money = 1500;
}

function pay(){
  balance += money;
  money = 0;
  document.getElementById("ball").innerHTML = balance;
  
}

function load(){
  let cardLoader = ""
  const cardContainer = document.querySelector("#cards")
  cardContainer.innerHTML= ""
  for(let i of a){
    cardLoader += `<img src="pics/${i}_of_clubs.png" class= "cardp">`
  }
  cardContainer.innerHTML = cardLoader
  a=[]
}