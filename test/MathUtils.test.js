isNumberEqualsTest();
getRandomIntTest();
getRandomTest();

function isNumberEqualsTest() {
    writeTestName("1. Test liczb równych z uwzględnieniem niedokładności pomiarowej");
    let result = MathUtils.isNumbersEqualWithAccuracy(20, 20, 0);
    writeTestResult(typeof result == "boolean" && result,
                    "Dwie liczby są równe");
    result = MathUtils.isNumbersEqualWithAccuracy(20, 20.002, 0.1);
    writeTestResult(typeof result == "boolean" && result,
                    "Dwie liczby są równe z uwzględnieniem niedokładności pomiarowej");
    result = MathUtils.isNumbersEqualWithAccuracy(3, 4, 0);
    writeTestResult(typeof result == "boolean" && !result,
                    "Dwie liczby nie są równe");
    result = MathUtils.isNumbersEqualWithAccuracy(3, 3.2, 0.1);
    writeTestResult(typeof result == "boolean" && !result,
                    "Dwie liczby nie są równe z uwzględnieniem niedokładności pomiarowej");
}

function getRandomIntTest(){
    writeTestName("2. Test losowej liczby całkowitej");
    let result = [];
    for(let i = 0; i < 10; i++){
        let int = MathUtils.getRandomInt(5, 10);
        result.push(int >= 5 && int <= 10 && int % 1 == 0);
    }
    writeTestResult(result instanceof Array &&
                    typeof result[0] == "boolean" && result[0] &&
                    typeof result[1] == "boolean" && result[1] &&
                    typeof result[2] == "boolean" && result[2] &&
                    typeof result[3] == "boolean" && result[3] &&
                    typeof result[4] == "boolean" && result[4] &&
                    typeof result[5] == "boolean" && result[5] &&
                    typeof result[6] == "boolean" && result[6] &&
                    typeof result[7] == "boolean" && result[7] &&
                    typeof result[8] == "boolean" && result[8] &&
                    typeof result[9] == "boolean" && result[9],
                    "10 pomyślnych prób");
}

function getRandomTest(){
    writeTestName("2. Test losowej liczby");
    let result = [];
    for(let i = 0; i < 10; i++){
        let number = MathUtils.getRandom(5, 10);
        result.push(number >= 5 && number <=10);
    }
    writeTestResult(result instanceof Array &&
                    typeof result[0] == "boolean" && result[0] &&
                    typeof result[1] == "boolean" && result[1] &&
                    typeof result[2] == "boolean" && result[2] &&
                    typeof result[3] == "boolean" && result[3] &&
                    typeof result[4] == "boolean" && result[4] &&
                    typeof result[5] == "boolean" && result[5] &&
                    typeof result[6] == "boolean" && result[6] &&
                    typeof result[7] == "boolean" && result[7] &&
                    typeof result[8] == "boolean" && result[8] &&
                    typeof result[9] == "boolean" && result[9],
                    "10 pomyślnych prób");
}