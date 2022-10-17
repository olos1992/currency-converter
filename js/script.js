let amountIn = document.querySelector(".js-amountIn");
let amountOut = document.querySelector(".js-amountOut");
let formElementSubmit = document.querySelector(".js-formS");
let currencyIn = document.querySelector(".js-currencyIn");
let currencyOut = document.querySelector(".js-currencyOut");

formElementSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    if (currencyIn.value==="PLN" && currencyOut.value==="PLN"){
        amountOut.value = amountIn.value 
    } else if (currencyIn.value==="PLN" && currencyOut.value==="EUR") {
        amountOut.value = (amountIn.value*0.207).toFixed(2)
    } else if (currencyIn.value==="PLN" && currencyOut.value==="USD") {
        amountOut.value = (amountIn.value*0.204).toFixed(2)
    } else if (currencyIn.value==="EUR" && currencyOut.value==="PLN") {
        amountOut.value = (amountIn.value*4.81).toFixed(2)
    } else if (currencyIn.value==="EUR" && currencyOut.value==="USD") {
        amountOut.value = (amountIn.value*0.99).toFixed(2)
    } else if (currencyIn.value==="EUR" && currencyOut.value==="EUR") {
        amountOut.value = amountIn.value
    } else if (currencyIn.value==="USD" && currencyOut.value==="PLN") {
        amountOut.value = (amountIn.value*4.89).toFixed(2)
    } else if (currencyIn.value==="USD" && currencyOut.value==="EUR") {
        amountOut.value = (amountIn.value*1.01).toFixed(2)   
    } else if (currencyIn.value==="USD" && currencyOut.value==="USD") {
        amountOut.value = amountIn.value
}});

let formElementInput = document.querySelector(".js-formI");
let amountInInput = document.querySelector(".js-amountInInput");
let amountOutInput = document.querySelector(".js-amountOutInput");
let currencyInInput = document.querySelector(".js-currencyInInput");
let currencyOutInput = document.querySelector(".js-currencyOutInput");
let currencyInVal = document.querySelector(".js-currencyInInput");
let currencyOutVal = document.querySelector(".js-currencyOutInput");

formElementInput.addEventListener("input", () => {

    switch (currencyInVal.value + currencyOutVal.value) {
        case "PLNPLN":
        case "EUREUR":
        case "USDUSD":
            amountOutInput.value = amountInInput.value;
            break;

        case "PLNEUR":
            amountOutInput.value = (amountInInput.value*0.207).toFixed(2);
            break;

        case "PLNUSD":
            amountOutInput.value = (amountInInput.value*0.204).toFixed(2);
            break;

        case "EURPLN":
            amountOutInput.value = (amountInInput.value*4.81).toFixed(2);
            break;

        case "EURUSD":
            amountOutInput.value = (amountInInput.value*0.99).toFixed(2);
            break;

        case "USDPLN":
            amountOutInput.value = (amountInInput.value*4.89).toFixed(2);
            break;

        case "USDEUR":
            amountOutInput.value = (amountInInput.value*1.01).toFixed(2);
            break;              
}});
