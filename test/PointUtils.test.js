lenghtBetweenPointsTest();

function lenghtBetweenPointsTest(){
    writeTestName("1. Test długości odcinka pomiędzy punktami");
    let point1 = new Point(2, 3);
    let point2 = new Point(7, 9);
    let result = PointUtils.getLenghtBetweenPoints(point1, point2);
    writeTestResult(typeof result == "number" && result == Math.sqrt(61),
                    "Odległość mniędzy dwoma punktami");
    point2 = new Point(-3, -5);;
    result = PointUtils.getLenghtBetweenPoints(point1, point2);
    writeTestResult(typeof result == "number" && result == Math.sqrt(89),
                    "Odległość miedzy dwoma punktami, w tym jednym ujemnym");
}