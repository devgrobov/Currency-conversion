const valueInputNode = document.querySelector('.js-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

valueInputNode.addEventListener('input' , function(){
    const groves = Number(valueInputNode.value);
    const currency = currencySelectorNode.value;
    const result = convert(groves,currency)
    outputNode.innerHTML = result;
});