class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    guess() {
        this.result = Math.round((this.minimum + this.maximum) / 2);
        return this.result
    }

    lower() {
        this.maximum = this.result
    }

    greater() {
        this.minimum = this.result
    }
}

module.exports = GuessingGame;
