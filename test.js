const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
   
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("adds 2 dollars to equal 292.5 yens", () => {
    let dollarToYen = fromDollarToYen(2)
    expect(dollarToYen).toBeCloseTo(292.523);
})

test("adds 2 euros to equal 2.14 USD", () => {
    let dollarToYen = fromEuroToDollar(2)
    expect(dollarToYen).toBeCloseTo(2.14);
})

test("adds 2 dollars to equal 0.011", () => {
    let dollarToYen = fromYenToPound(2)
    expect(dollarToYen).toBeCloseTo(0.011);
})