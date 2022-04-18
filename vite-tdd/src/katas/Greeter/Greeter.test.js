const Greeter = require('./Greeter');

describe("My Greeter class", () => {
    let Greeting;

    beforeEach(() => {
        Greeting = new Greeter();
        Greeting.hour = 14;
    });

    it("should receive a name and output a greet", () => {
        expect(Greeting.greet("Paul")).toMatch("Hello Paul!");
        expect(Greeting.greet("Bojji")).toMatch("Hello Bojji!");
    });

    it("trims the input of the name", () => {
        expect(Greeting.greet("Paul ")).toMatch("Hello Paul!");
        expect(Greeting.greet("    Paul ")).toMatch("Hello Paul!");
    });

    it("should capitalize the first letter of the name", () => {
        expect(Greeting.greet("paul")).toMatch("Hello Paul!");
        expect(Greeting.greet("bobby")).toMatch("Hello Bobby!");
    });

    it("should change the greet to good morning when time is between 06:00-12:00", () => {
        Greeting.hour = 8;
        expect(Greeting.greet("Paul")).toMatch("Good morning Paul!");
    });

    it("should change the greet to good evening when time is between 18:00-22:00", () => {
        Greeting.hour = 19;
        expect(Greeting.greet("Paul")).toMatch("Good evening Paul!");
        Greeting.hour = 21;
        expect(Greeting.greet("Bob")).toMatch("Good evening Bob!");
    });

    it("should change the greet to good night when time is between 22:00-06:00", () => {
        Greeting.hour = 22;
        expect(Greeting.greet("Paul")).toMatch("Good night Paul!");
        Greeting.hour = 4;
        expect(Greeting.greet("Bob")).toMatch("Good night Bob!");
    });
});