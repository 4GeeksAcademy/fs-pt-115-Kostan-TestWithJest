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


const fromDollarToYen = (euro, dollar ,yen) => {
    return (dollar * yen) / euro
}

const fromEuroToDollar = (euro ,dollar) => {
    return euro * dollar
}

const fromYenToPound = (euro, yen ,pound) => {
    return (yen * pound) / euro
}
console.log(fromDollarToYen(1,2,2 ))
console.log(fromEuroToDollar(1,2,))
console.log(fromYenToPound(1,2,2 ))