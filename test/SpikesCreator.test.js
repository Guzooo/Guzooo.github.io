getStraightWithSpikesTest();

function getStraightWithSpikesTest(){
    writeTestName("1. Test zwracania nowych punktów zawierających kolce");
    let creator = new SpikesCreator();
    creator.setSpikesSize(6);
    creator.setSpikesCount(4.32);
    creator.setSpineMaxHeight(20);
    let result = creator.getStraightWithSpikes(new Point(-10, 10), new Point(10, 10), new Point(0, 0));
    writeTestResult(result instanceof Array && result.length > 0 &&
                    result[0] instanceof Point,
                    "Zwraca nowe punkty");
}