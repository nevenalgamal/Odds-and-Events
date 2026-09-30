// === State ===
const bank = [];
const odds = [];
const evens = [];
// function  that change state
// 1- change bank
function addNumber(number) {
  bank.push(number);
  render();
}
function sortOne() {
  if (bank.length === 0) return;
  const firstNumber = bank.shift();
  if (firstNumber % 2 === 0) {
    evens.push(firstNumber);
  } else {
    odds.push(firstNumber);
  }
  render();
}
function sortAll() {
  while (bank.length !== 0) {
    sortOne();
  }
}
// compoent-1
function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `<label> Enter a number</label>  
    <input name="number"/> 
    <button type="submit">Add Number</button `;

  $form.addEventListener("submit", () => {
    const data = new FormData($form);
    const number = data.get("number");
    addNumber(Number(number));
  });

  return $form;
}
//compoent -2
function NumberLists() {
  const $div = document.createElement("div");
  $div.innerHTML = `<h2>Bank</h2> 
                   <p>${bank}</p> 
                   <h2> Odd</h2> 
                   <p>${odds}</p> 
                   <h2>Evens</h2> 
                   <p>${evens}</p>`;
  return $div;
}
//conpoent -3
function SortButtons() {
  const $div = document.createElement("div");
  $div.innerHTML = `<button id ="sort-one"> sort 1</button> 
                    <button id ="sort-all"> sort All</button>`;
  const $button1 = $div.querySelector("#sort-one");
  const $button2 = $div.querySelector("#sort-all");

  $button1.addEventListener("click", () => {
    sortOne();
  });

  $button2.addEventListener("click", () => {
    sortAll();
  });

  return $div;
}
//render
function render() {
  const $app = document.querySelector("#app");
  const children = [NumberForm(), SortButtons(), NumberLists()];
  $app.replaceChildren(...children);
}
render();
