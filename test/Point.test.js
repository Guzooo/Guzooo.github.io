positionTest();

function positionTest(){
    writeTestName("1. Test pozycji");
    let point = new Point(2, 3);
    writeTestResult(point instanceof Point && point.getX() == 2,
                    "Pozycja x");
    writeTestResult(point instanceof Point && point.getY() == 3,
                    "Pozycja y");
}