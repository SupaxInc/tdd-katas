class StringCalculator {
    constructor() {
    }

    add(numbers) {
        if(numbers === "") return 0;

        let delimiter;
        if(numbers.includes("//")) {
            delimiter = numbers.charAt(2);
            numbers = numbers.slice(4);
        }
        else if(numbers.includes(",")) {
            delimiter = ",";
        }
        else if(numbers.includes("\n")){
            delimiter = "\n";
        }
        
        const arrNumbers = numbers.split(delimiter).map(num => parseInt(num));

        return this.sum(this.checkNegatives(arrNumbers));
    }

    checkNegatives(nums) {
        const negativeNums = [];
        for(const num of nums) {
            if(num < 0) negativeNums.push(num);
        }

        if(negativeNums.length) throw new Error(`negatives not allowed: ${negativeNums.join(",")}`);

        return nums;
    } 

    sum(nums) {
        return nums.filter(num => num < 1001).reduce((a, b) => a+b);
    }
}

module.exports = StringCalculator;