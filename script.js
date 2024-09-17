//console.log("Javascript carregado!")

const amount = document.getElementById("amount");

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  //console.log(amount.value);
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
  //console.log(amount.value);
});

const form = document.querySelector("form");
const currency = document.getElementById("currency");

//captando o evento de submit do formulário
form.onsubmit = (event) => {
  //prevenir o reload
  event.preventDefault();
  //console.log(currency.value);
};