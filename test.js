const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One yen should be 0.007 dollars", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(10)
    const expected = 10 * 127.9 ;
    expect(fromDollarToYen(10)).toBe(1279)
})

test("One yen should equal 0.8 pound", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(12)
    const expected = 12 * 0.8;
    expect(fromYenToPound(12)).toBe(9.600000000000001)
})