const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    return valueInPound
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}

console.log(fromYenToPound(12))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };