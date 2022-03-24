getValueTest();

function getValueTest(){
    writeTestName("1. Test zwracania wartości przez punkt");
    let noisePoint = new NoisePoint(8, 6, 5, 10);
    let point = new Point(12, 9);
    let result = noisePoint.getValue(point);
    writeTestResult(typeof result == "number" && result == 75/20,
                    "Zwracanie wartości punktu leżącego w zasięgu punktu szumu");
    point = new Point(8, 6);
    result = noisePoint.getValue(point);
    writeTestResult(typeof result == "number" && result == 5,
                    "Zwracanie wartości punktu leżącego w środku zasięgu punktu szumu");
    point = new Point(14, 14);
    result = noisePoint.getValue(point);
    writeTestResult(typeof result == "number" && result == 0,
                    "Zwracanie wartości punktu leżącego na granicy zasięgu punktu szumu");
    point = new Point(20, -13);
    result = noisePoint.getValue(point);
    writeTestResult(typeof result == "number" && result == 0,
                    "Zwracanie wartości punktu leżącego poza zasięgiem punktu szumu");
}