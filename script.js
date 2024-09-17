const dollarPrice = 5.50;
const euroPrice = 6.11;
const poundPrice = 7.24;

const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const  footer = document.querySelector("main footer");

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  //console.log(amount.value);
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
  //console.log(amount.value);
});



//captando o evento de submit do formulário
form.onsubmit = (event) => {
  //prevenir o reload
  event.preventDefault();
  //console.log(currency.value);

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, dollarPrice, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, euroPrice, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, poundPrice, "£");
      break;
  }
};

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
  try {
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente!")
  }
}