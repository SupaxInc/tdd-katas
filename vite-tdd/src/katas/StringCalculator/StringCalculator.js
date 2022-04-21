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
        

        if(numbersArray.length === 1 && numbersArray[0] >= 0) return numbersArray[0];

        return this.sum(this.checkNegativeValues(numbersArray));
    }

    checkNegativeValues(numbersArray) {
        const negatives = [];

        for(let num of numbersArray) {
            if(num < 0) negatives.push(num);
        }

        if(negatives.length > 0) throw new Error("There should be no negative values: " + negatives.join(','));

        return numbersArray;
    }

    sum(numbersArray) {
        return numbersArray.reduce((a, b) => a+b);
    }
}

module.exports = StringCalculator;