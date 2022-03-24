getNewPointTest();
isPointCanExistTest();
activeTest();

function getNewPointTest(){
    writeTestName("1. Test tworzenia nowego punktu");
    let poissonPoint = new PoissonPoint(15, 22, 10, 10);
    let result = poissonPoint.getNewPoint(10, 10);
    writeTestResult(result instanceof PoissonPoint,
                    "Utworzono nowy punkt na podstawie punktu");
    poissonPoint = new PoissonPoint(15, 22, 5, 15);
    result = poissonPoint.getNewPoint(5, 15);
    writeTestResult(result instanceof PoissonPoint,
                    "Utworzono nowy punkt na podstawie punktu o różnych parametrach odległości");
}

function isPointCanExistTest(){
    writeTestName("2. Test czy punkt nie jest zbyt blisko innego");
    let poissonPoint1 = new PoissonPoint(7, 25, 10, 10);
    let poissonPoint2 = new PoissonPoint(10, 21, 10, 10);
    let result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && !result,
                    "Punkt jest zbyt blisko");
    poissonPoint1 = new PoissonPoint(7, 25, 3, 3);
    result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && result,
                    "Punkt nie jest zbyt blisko");
    poissonPoint1 = new PoissonPoint(7, 25, 5, 5);
    result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && result,
                    "Punkt nie jest zbyt blisko, leży na krawędzi");
    poissonPoint1 = new PoissonPoint(2, 23, 10, 5);
    result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && !result,
                    "Punkt jest zbyt blisko odległości X, różne odległości na osi X oraz Y");
    poissonPoint1 = new PoissonPoint(2, 23, 5, 10);
    result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && result,
                    "Punkt nie jest zbyt blisko odległości X, różne odległości na osi X oraz Y");
    poissonPoint1 = new PoissonPoint(9, 30, 5, 10);
    result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && !result,
                    "Punkt jest zbyt blisko odległości Y, różne odległości na osi X oraz Y");
    poissonPoint1 = new PoissonPoint(9, 30, 10, 5);
    result = poissonPoint1.isPointCanExsist(poissonPoint2);
    writeTestResult(typeof result == "boolean" && result,
                    "Punkt nie jest zbyt blisko odległości Y, różne odległości na osi X oraz Y");
}

function activeTest(){
    writeTestName("3. Test działania akywności");
    let poissonPoint = new PoissonPoint(7, 2, 10, 10);
    let result = poissonPoint.isActive();
    writeTestResult(typeof result == "boolean" && result,
                    "Punkt jest aktywny po utworzeniu");
    poissonPoint.deactivate();
    result = poissonPoint.isActive();
    writeTestResult(typeof result == "boolean" && !result,
                    "Punkt został dezaktywowany");
}