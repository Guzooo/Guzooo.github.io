getPointValueTest();

function getPointValueTest(){
    writeTestName("1. Test zwracania wartości dla punktu");
    let noiseGenerator = new NoiseGenerator();
    let result = noiseGenerator.getPointValue(new Point(46, 57));
    writeTestResult(typeof result == "number" && result == 0,
                    "Zwracanie wartości dla punktu przed wygenerowaniem szumu");
    noiseGenerator.setDimensions(100, 100);
    noiseGenerator.setDistance(20, 20);
    noiseGenerator.setForce(4, 5);
    noiseGenerator.generateNoiseWithThisPoints([new Point(40, 50), new Point (50, 54)]);
    result = noiseGenerator.getPointValue(new Point(46, 57));
    writeTestResult(typeof result == "number",
                    "Zwracanie wartości dla punktu po wygenerowaniu szumu");
}