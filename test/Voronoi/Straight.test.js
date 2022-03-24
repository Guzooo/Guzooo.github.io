abTest()
pointsStartEndTest();
perpendicularPointsTest();
containingPointsTest();
findCommonPointTest();
isPointInsideTest();

function abTest(){
    writeTestName("1. Test współczynniku kierunkowego i wyrazu wolnego");
    let straight = new Straight(6, 3);
    writeTestResult(straight instanceof Straight && straight.getA() == 6,
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof Straight && straight.getB() == 3,
                    "Wyraz wolny (b)");
}

function pointsStartEndTest(){
    writeTestName("2. Test punktów tworzącą odcinek");
    let straight = new Straight (5, 2);
    straight.setStartPoint(new Point(4, 22));
    straight.setEndPoint(new Point(9, 47));
    writeTestResult(straight instanceof Straight && straight.getStart() instanceof Point && straight.getStart().getX() == 4 && straight.getStart().getY() == 22,
                    "Punkt początkowy");
    writeTestResult(straight instanceof Straight && straight.getEnd() instanceof Point && straight.getEnd().getX() == 9 && straight.getEnd().getY() == 47,
                    "Punkt końcowy");
    straight.setStartPoint(new Point(2, 12));
    straight.setEndPoint(new Point(-5, -23));
    writeTestResult(straight instanceof Straight && straight.getStart() instanceof Point && straight.getStart().getX() == 2 && straight.getStart().getY() == 12,
                    "Zmiana punktu początkowego");
    writeTestResult(straight instanceof Straight && straight.getEnd() instanceof Point && straight.getEnd().getX() == -5 && straight.getEnd().getY() == -23,
                    "Zmiana punktu końcowego");
    straight.setStartPoint(new Point(0, 4));
    straight.setEndPoint(new Point(-3, -10));
    writeTestResult(straight instanceof Straight && straight.getStart() instanceof Point && straight.getStart().getX() == 2 && straight.getStart().getY() == 12,
                    "Błędna zmiana punktu początkowego");
    writeTestResult(straight instanceof Straight && straight.getEnd() instanceof Point && straight.getEnd().getX() == -5 && straight.getEnd().getY() == -23,
                    "Błędna zmiana punktu końcowego");
}

function perpendicularPointsTest(){
    perpendicularPointsSlopingTest();
    perpendicularPointsHorizontalTest();
    perpendicularPointsVerticalTest();
}

function perpendicularPointsSlopingTest(){
    writeTestName("3.1. Test dowolnej lini prostopadłej do punktów");
    let point1 = new Point(3, 8);
    let point2 = new Point(4, 1);
    let straight = Straight.getPerpendicularToPoints(point1, point2);
    writeTestResult(straight instanceof Straight && straight.getA() == (1/7),
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof Straight && straight.getB() == 4,
                    "Wyraz wolny (b)");
}

function perpendicularPointsHorizontalTest(){
    writeTestName("3.2. Test poziomej lini, prostopadłej do punktów");
    let point1 = new Point(3, 2);
    let point2 = new Point(3, 5);
    let straight = Straight.getPerpendicularToPoints(point1, point2);
    writeTestResult(straight instanceof Straight && straight.getA() == 0,
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof Straight && straight.getB() == (7/2),
                    "Wyraz wolny (b)");
}

function perpendicularPointsVerticalTest(){
    writeTestName("3.3. Test pionowej lini, prostopadłej do punktów");
    let point1 = new Point(4, 3);
    let point2 = new Point(7, 3);
    let straight = Straight.getPerpendicularToPoints(point1, point2);
    writeTestResult(straight instanceof StraightVertical && straight.getA() == Infinity,
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof StraightVertical && straight.getX() == 11/2,
                    "Pozycja na której znajduje się prosta (x)");
}

function containingPointsTest(){
    containingPointsSlopingTest();
    containingPointsHorizontalTest();
    containingPointsVerticalTest();
}

function containingPointsSlopingTest(){
    writeTestName("4.1. Test dowolnej lini zawierającej punkty");
    let point1 = new Point(2, 0);
    let point2 = new Point(1, 3);
    let straight = Straight.getContainingPoints(point1, point2);
    writeTestResult(straight instanceof Straight && straight.getA() == -3,
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof Straight && straight.getB() == 6,
                    "Wyraz wolny (b)");
}

function containingPointsHorizontalTest(){
    writeTestName("4.2. Test poziomej lini zawierającej punkty");
    let point1 = new Point(4, 2);
    let point2 = new Point(3, 2);
    let straight = Straight.getContainingPoints(point1, point2);
    writeTestResult(straight instanceof Straight && straight.getA() == 0,
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof Straight && straight.getB() == 2,
                    "Wyraz wolny (b)");
}

function containingPointsVerticalTest(){
    writeTestName("4.3. Test pionowej lini zawierającej punkty");
    let point1 = new Point(2, 0);
    let point2 = new Point(2, 2);
    let straight = Straight.getContainingPoints(point1, point2);
    writeTestResult(straight instanceof StraightVertical && straight.getA() == Infinity,
                    "Współczynnik kierunkowy (a)");
    writeTestResult(straight instanceof StraightVertical && straight.getX() == 2,
                    "Pozycja na której znajduje się prosta (x)");
}

function findCommonPointTest(){
    findCommonPointSlopingTest();
    findCommonPointPerpendicularTest();
    findCommonPointParellelTest();
}

function findCommonPointSlopingTest(){
    writeTestName("5.1. Test szukania wspólnych punktów dowolnych linii");
    let straight1 = new Straight(3, 1);
    let straight2 = new Straight(1, 2);
    let result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == 1/2 && result.getY() == 5/2,
                    "Punkt wspólny bez ograniczeń");
    straight1.setStartPoint(new Point(2, 7));
    straight1.setEndPoint(new Point(5, 16));
    result = straight1.findCommonPoint(straight2);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Brak punktu wspólnego dla jednej linii z ograniczeniami");
    straight1.setStartPoint(new Point(-1, -2));
    result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == 1/2 && result.getY() == 5/2,
                    "Punkt wspólny dla jednej linii z ograniczeniami");
    straight2.setStartPoint(new Point(-3, -1));
    straight2.setEndPoint(new Point(0, 2));
    result = straight1.findCommonPoint(straight2);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Brak punktu wspólnego dla obu linii z ograniczeniami");
    straight2.setEndPoint(new Point(2, 4));
    result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == 1/2 && result.getY() == 5/2,
                    "Punkt wspóln dla obu linii z ograniczeniami");
    straight1 = new Straight(-3, -2);
    straight2 = new Straight(-10, -1);
    result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == 1/7 && result.getY() == -17/7,
                    "Punkt wspólny dla linii bez ograniczeń z ujemnymi współczynnikami a");
    straight2 = new Straight(0, 7);
    result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == -3 && result.getY() == 7,
                    "Punkt wspólny dla linii poziomej i dowolnej");
    straight2 = Straight.getContainingPoints(new Point(-4, 8), new Point(-4, 1));
    result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == -4 && result.getY() == 10,
                    "Punkt wspólny dla linii pionowej i dowolnej");
}

function findCommonPointPerpendicularTest(){
    writeTestName("5.2. Test szukania wspólnych punktów na liniach prostopadłych");
    let straight1 = new Straight(0, 5);
    let straight2 = Straight.getContainingPoints(new Point(5, 3), new Point(5, 0));
    result = straight2.findCommonPoint(straight1);
    writeTestResult(result instanceof Point && result.getX() == 5 && result.getY() == 5,
                    "Punkt wspólny dla lini poziomej i pionowej");
    straight1 = new Straight(3, 5);
    straight2 = new Straight(-1/3, 9);
    result = straight1.findCommonPoint(straight2);
    writeTestResult(result instanceof Point && result.getX() == 1.2 && result.getY() == 8.6,
                    "Punkt wspólny dla lini dowolnych");
}

function findCommonPointParellelTest(){
    writeTestName("5.3. Test szukania wspólnych punktów na liniach równoległych");
    let straight1 = new Straight(-3, 4);
    let straight2 = new Straight(-3, 7);
    result = straight1.findCommonPoint(straight2);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Brak punktu wspólnego na dowolnych równoległych liniach");
    straight1 = new Straight(0, 1);
    straight2 = new Straight(0, -10);
    result = straight1.findCommonPoint(straight2);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Brak punktu wspólnego na poziomych równoległych liniach");
    straight1 = Straight.getContainingPoints(new Point(5, 2), new Point(5, 10));
    straight2 = Straight.getContainingPoints(new Point(2, 8), new Point(2, 0));
    result = straight1.findCommonPoint(straight2);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Brak punktu wspólnego na pionowych równoległych liniach");
}

function isPointInsideTest(){
    isPointInsideSlopingTest();
    isPointInsideHorizontalTest();
    isPointInsideVerticalTest();
}

function isPointInsideSlopingTest(){
    writeTestName("6.1. Test czy punkt znajduje się na dowolnej linii");
    let straight = new Straight(3, 1);
    let point = new Point(-1, -2);
    let result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt ujemny na linii bez ograniczeń");
    point = new Point(2, 7);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na linii bez ograniczeń");
    point = new Point(2, 8);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Punkt poza linią bez ograniczeń");
    straight.setStartPoint(new Point(-1, -2));
    straight.setEndPoint(new Point(2, 7));
    point = new Point (3, 10);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Punkt na linii, poza ograniczeniami");
    straight.setEndPoint(new Point(3, 10));
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na końcu linii z ograniczeniami");
    point = new Point(0, 1);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na linii z ograniczeniami");
}

function isPointInsideHorizontalTest(){
    writeTestName("6.2. Test czy punkt znajduje się na poziomej linii");
    let straight = new Straight(0, 3);
    let point = new Point(-5, 3);
    let result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt ujemny na linii bez ograniczeń");
    point = new Point(90, 3);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na linii bez ograniczeń");
    point = new Point(5, 4);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Punkt poza linią bez ograniczeń");
    straight.setStartPoint(new Point(-4, 3));
    straight.setEndPoint(new Point(8, 3));
    point = new Point(10, 3);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Punkt na linii, poza ograniczeniami");
    straight.setEndPoint(new Point(10, 3));
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na końcu linii z ograniczeniami");
    point = new Point(0, 3);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na linii z ograniczeniami");
}

function isPointInsideVerticalTest(){
    writeTestName("6.3. Test czy punkt znajduje się na pionowej linii");
    let straight = Straight.getContainingPoints(new Point(4, 8), new Point(4, 5));
    let point = new Point(4, -12);
    let result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt ujemny na linii bez ograniczeń");
    point = new Point(4, 4);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na linii bez ograniczeń");
    point = new Point(5, 12);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Punkt poza linią bez ograniczeń");
    straight.setStartPoint(new Point(4, -4));
    straight.setEndPoint(new Point(4, 15));
    point = new Point(4, 20);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == false,
                    "Punkt na linii, poza ograniczeniami");
    straight.setEndPoint(new Point(4, 20));
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na końcu linii z ograniczeniami");
    point = new Point(4, 3);
    result = straight.isPointInside(point);
    writeTestResult(typeof result == "boolean" && result == true,
                    "Punkt na linii z ograniczeniami");
}