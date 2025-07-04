console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7, 3))

module.exports = { sum };


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen = (dollars) => {
    return dollars * oneEuroIs.JPY / oneEuroIs.USD; 
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD; 
}

const fromYenToPound = (yen) => {
    return yen / oneEuroIs.JPY * oneEuroIs.GBP; 
}
console.log(fromDollarToYen(2))
console.log(fromEuroToDollar(2))
console.log(fromYenToPound(2))
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };