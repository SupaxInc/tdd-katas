const StringCalculator = require('./StringCalculator');

describe("my StringCalculator class", () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    it("Can add up to two numbers separated by commas and will return sum.", () => {
        expect(calculator.add("")).toBe(0);
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("1,5")).toBe(6);
    });

    it("Can add up an undefined amount of numbers.", () => {
        expect(calculator.add("1,5,6,7,8")).toBe(27);
    });

    it("Can split the number string using both new line characters and commas.", () => {
        expect(calculator.add("1\n2")).toBe(3);
    });

    it("Can support a different delimiter", () => {
        expect(calculator.add("//[\n1[2")).toBe(3);
    });

    it("Throws an exception when negative values are passed", () => {
        expect(() => calculator.add("-1")).toThrow(new Error("There should be no negative values: -1"));
        expect(() => calculator.add("-2,-4")).toThrow(new Error("There should be no negative values: -2,-4"));
    });
});