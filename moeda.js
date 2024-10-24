document.getElementById('currency-form').addEventListener('submit', function (event){

// obter valores de entrada formulário
const valor = parseFloat(document.getElementById('amount').value);
const moeda = document.getElementById('moeda').value;
const moeda1 = document.getElementById('moeda1').value;

// definir taxa de cambio fixa com utilização de objeto
const exchangeRates = {
    USD: {EUR: 0.93, BRL: 5.71},
    BRL: {EUR: 0.16, USD: 0.18},
    EUR: {EUR: 6.16, EUR: 1.08},
};
});