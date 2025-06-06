const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-moeda").value
    const currencyValueToConvrt = document.querySelector(".valor-moeda-para-converter") //valor em real
    const currencyValueConverted = document.querySelector(".valor-moeda") //outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.59
    const euroToday = 6.37
    const libraToday = 7.56
    const bitcoinToday = 582708.72



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvrt.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const dolar = document.getElementById("dolar")
    const moedaImg = document.querySelector(".moeda-img")

    if (currencySelect.value == "dolar") {
        dolar.innerHTML = "Dólar Americano"
        moedaImg.src = "./assets/dolar.png"
    }


    if (currencySelect.value == "euro") {
        dolar.innerHTML = "Euro"
        moedaImg.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        dolar.innerHTML = "Libra Esterlina"
        moedaImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        dolar.innerHTML = "BitCoin"
        moedaImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)