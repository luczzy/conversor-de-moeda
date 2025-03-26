# **Projeto de Conversor de moedas simples**

## **Objetivo**
O objetivo deste projeto é desenvolver um projeto simples para conversão de moedas utilizando linguagens básicas de programação.

## **Preview**
![Preview](/img/conversor.gif)

## **Funcionalidades**
O conversor permite que o usuário escolha a moeda de origem e a moeda de destino, insira um valor e receba o resultado convertido em tempo real. Ele também realiza a atualização automática do símbolo da moeda ao escolher uma nova moeda de origem.

## **Estrutura do código**

``Função updateCurrency():`` Responsável por atualizar o símbolo da moeda quando o usuário seleciona uma nova moeda no campo de origem, também verifica qual moeda foi selecionada (USD, EUR ou BRL), atualiza o símbolo correspondente no elemento currencySymbol, define o placeholder do campo de entrada Tamanho como "Valor". Esta função é executada automaticamente ao carregar a página para garantir que o símbolo esteja correto desde o início.

- ``Exemplo:``
```js
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
```
---------------------------------------------------------------------------------------------------------------
``Evento do Botão "Converter":`` A função de conversão é acionada ao clicar no botão "Converter", ela obtém o valor inserido pelo usuário no campo tamanho e as moedas selecionadas (origem e destino), valida se o valor inserido é um número positivo; caso contrário, exibe um alerta pedindo um valor válido, uiliza taxas de câmbio fixas (definidas no objeto exchangeRates) para calcular a conversão entre as moedas e atualiza o campo conversao com o valor convertido, exibindo o resultado formatado com duas casas decimais e a moeda de destino. 

- ``Exemplo:``
```js
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
```
---------------------------------------------------------------------------------------------------------------

``Evento do Botão "Reset":``Este evento é acionado ao clicar no botão "Reset", ele limpa o conteúdo do campo conversão, removendo o resultado da última conversão exibida.

- ``Exemplo:``
```js
// Adiciona o evento de reset para limpar o resultado da conversão
document.getElementById('ResetButton').addEventListener('click', function () {
document.getElementById('conversao').textContent = ''; // Limpa o campo de resultado
});
```
## Tecnologias Utilizadas
HTML5<br>
CSS3<br>
JS

## Autores
Deivid Marques
