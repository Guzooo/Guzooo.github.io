class MathUtils{
    
    static isNumbersEqualWithAccuracy(number1, number2, accurancy){
        let difference = number1 - number2;
        if(accurancy < 0)
            accurancy *= -1;
        if(difference <= accurancy && difference >= accurancy *-1)
            return true;
        return false;
    }

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    static getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.random() * (max - min) + min;
    }
}