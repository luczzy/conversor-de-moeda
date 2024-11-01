// Função para atualizar o símbolo da moeda ao selecionar uma nova moeda
function updateCurrency() {
  const fromCurrency = document.getElementById('fromCurrency').value;
  const currencySymbol = document.getElementById('currencySymbol');
 
  // Define o símbolo da moeda de acordo com a seleção
  if (fromCurrency === "USD") {
    currencySymbol.textContent = "$";
  } else if (fromCurrency === "EUR") {
    currencySymbol.textContent = "€";
  } else if (fromCurrency === "BRL") {
    currencySymbol.textContent = "R$";
  }

  // Atualiza o placeholder
  document.getElementById('Tamanho').placeholder = "Valor";
}

// Inicializa o símbolo da moeda no carregamento
updateCurrency();

// Adiciona o evento de clique ao botão "Converter"
document.getElementById('convertButton').addEventListener('click', function () {
const valor = parseFloat(document.getElementById('Tamanho').value);
const fromCurrency = document.getElementById('fromCurrency').value;
const toCurrency = document.getElementById('toCurrency').value;

// Valida se o valor inserido é um número
if (isNaN(valor) || valor <= 0) {
  alert("Por favor, insira um valor numérico válido para conversão.");
  return;
}

// Definir taxas de câmbio fixas
const exchangeRates = {
  USD: { EUR: 0.93, BRL: 5.71 },
  BRL: { EUR: 0.16, USD: 0.18 },
  EUR: { USD: 1.08, BRL: 6.17 }
};

// Calcula a conversão
let valorConvertido;
if (fromCurrency === toCurrency) {
  valorConvertido = valor;
} else {
  valorConvertido = valor * exchangeRates[fromCurrency][toCurrency];
}

// Exibe o resultado da conversão
const conversao = document.getElementById('conversao');
conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${toCurrency}`;
});

// Adiciona o evento de reset para limpar o resultado da conversão
document.getElementById('ResetButton').addEventListener('click', function () {
document.getElementById('conversao').textContent = ''; // Limpa o campo de resultado
});