/* uhh dynamic class giver */
let balance = 0;
let pay = 0;
const payBtn = document.querySelector("#pay-btn");
if (Number(localStorage.getItem("balance"))) {
  balance = Number(localStorage.getItem("balance"));
  console.log(balance);
} else {
  balance = 1000;
  console.log(balance);
  localStorage.setItem("balance", balance);
}

const topUp = document.querySelectorAll(".top-up");

topUp.forEach((element) => {
  element.addEventListener("click", () => {
    topUp.forEach((item) => {
      item.classList.remove("selected");
    });

    element.classList.add("selected");
    console.log(element.id);
    pay = Number(element.id);
  });
});

payBtn.addEventListener("click", () => {
  balance += pay;
  localStorage.setItem("balance", balance);
  pay = 0;
});
