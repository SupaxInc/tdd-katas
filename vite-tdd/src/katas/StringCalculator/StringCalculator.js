class StringCalculator {

    add(numbers) {
        if(numbers === "") return 0;

        let delimiter; 
        if(numbers.includes("//")) {
            delimiter = numbers[2];
            numbers = numbers.substring(4);
        }
        else {
            delimiter = ',';
        }

        const numbersArray = numbers.replace('\n', delimiter).split(delimiter).map(num => parseInt(num));
        this.checkNegativeValues(numbersArray);

        if(numbersArray.length === 1) return numbersArray[0];

        return numbersArray.reduce((a, b) => a+b);
    }

    checkNegativeValues(numbersArray) {
        const negatives = [];

        for(let num of numbersArray) {
            if(num < 0) negatives.push(num);
        }

        if(negatives.length > 0) throw new Error("There should be no negative values: " + negatives.join(','));
    }
}

module.exports = StringCalculator;