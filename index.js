const btnEl = document.getElementById("btn");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const resultSpan = document.getElementById("result");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  resultSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
