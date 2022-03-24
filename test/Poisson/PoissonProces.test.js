getPointsTest()

function getPointsTest(){
    writeTestName("1. Test zwracania punktów");
    let poissonProces = new PoissonProces();
    let result = poissonProces.getPoints();
    writeTestResult(result instanceof Array,
                    "Zwraca tabele");
}