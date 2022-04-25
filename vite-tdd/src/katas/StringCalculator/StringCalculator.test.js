const StringCalculator = require('./StringCalculator');

describe("StringCalculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    it("can add up two numbers that are separated by commas", () => {
        expect(calculator.add("1,3")).toBe(4);
        expect(calculator.add("")).toBe(0);
        expect(calculator.add("1")).toBe(1);
    });

    it("can add up to unknown amount of numbers", () => {

        expect(calculator.add("1,5,6,7")).toBe(19);
    });

    it("can use new line as delimiter instead of just commas", () => {

        expect(calculator.add("1\n3")).toBe(4);
    });

    it("can support different delimiters other than comma and new lines", () => {
        expect(calculator.add("//|\n1|2")).toBe(3);
    });

    it("does not support any negative numbers", () => {
        expect(() => calculator.add("//[\n3[-5")).toThrow("negatives not allowed: -5");
        expect(() => calculator.add("//[\n-3[-5[-10")).toThrow("negatives not allowed: -3,-5,-10");
    });

    it("does not add numbers greater than 1000", () => {
        expect(calculator.add("1001,5")).toBe(5);
    });

    it("can support different delimiters with any length", () => {
        expect(calculator.add("//[....]\n1....5....10")).toBe(11);
    });
});