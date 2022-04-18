class Greeter {
    constructor() {
    }

    greet(name) {
        name = name.trim();
        name = name.charAt(0).toUpperCase() + name.slice(1);

        if(this._hour >= 6 && this._hour <= 12) {
            return `Good morning ${name}!`;
        }

        if(this._hour >= 18 && this._hour < 22) {
            return `Good evening ${name}!`;
        }
        
        if((this._hour >= 22 && this._hour <= 24) || (this._hour >= 0 && this._hour < 6)) {
            return `Good night ${name}!`;
        }

        return `Hello ${name}!`;
    }

    set hour(hour) {
        this._hour = hour;
    }
}

module.exports = Greeter;