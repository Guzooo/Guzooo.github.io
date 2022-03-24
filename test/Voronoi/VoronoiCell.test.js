centerTest();
vertiesTest();
allocateTest();
createSpaceTest();

function centerTest(){
    writeTestName("1. Test pozycji punktu centralnego");
    let voronoi = new VoronoiCell(new Point(3,2));
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getCenter() instanceof Point &&
                    voronoi.getCenter().getX() == 3 && voronoi.getCenter().getY() == 2,
                    "Punkt centralny");
}

function vertiesTest(){
    writeTestName("2. Test krawędzi");
    let voronoi = new VoronoiCell(new Point(1, -4));
    voronoi.addVertice(new Point(3, 7));
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices()[0] instanceof Point &&
                    voronoi.getVertices()[0].getX() == 3 && voronoi.getVertices()[0].getY() == 7,
                    "Dodawanie krawędzi");
    voronoi.addVertice(new Point(8, 5));
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices()[0] instanceof Point &&
                    voronoi.getVertices()[0].getX() == 3 && voronoi.getVertices()[0].getY() == 7 &&
                    voronoi.getVertices()[1] instanceof Point &&
                    voronoi.getVertices()[1].getX() == 8 && voronoi.getVertices()[1].getY() == 5,
                    "Dodawanie kolejnej krawędzi");
    voronoi.addVertice(new Point(-4, -10));
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices()[0] instanceof Point &&
                    voronoi.getVertices()[0].getX() == 3 && voronoi.getVertices()[0].getY() == 7 &&
                    voronoi.getVertices()[1] instanceof Point &&
                    voronoi.getVertices()[1].getX() == 8 && voronoi.getVertices()[1].getY() == 5 &&
                    voronoi.getVertices()[2] instanceof Point &&
                    voronoi.getVertices()[2].getX() == -4 && voronoi.getVertices()[2].getY() == -10,
                    "Dodawanie ujemnej krawędzi");
    voronoi.clearVertices();
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices().length == 0,
                    "Usuwanie krawędzi");
    voronoi.addVertice(new Point(-5, 0));
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices()[0] instanceof Point &&
                    voronoi.getVertices()[0].getX() == -5 && voronoi.getVertices()[0].getY() == 0,
                    "Ponowne dodanie krawędzi");
}

function allocateTest(){
    writeTestName("3. Test dzielenia się powierzchnią");
    let voronoi1 = new VoronoiCell(new Point(100, 400));
    let voronoi2 = new VoronoiCell(new Point(800, 200));
    voronoi1.addVertice(new Point(0, 0));
    voronoi1.addVertice(new Point(1000, 0));
    voronoi1.addVertice(new Point(1000, 500));
    voronoi1.addVertice(new Point(0, 500));
    voronoi2.addVertice(new Point(0, 0));
    voronoi2.addVertice(new Point(1000, 0));
    voronoi2.addVertice(new Point(1000, 500));
    voronoi2.addVertice(new Point(0, 500));
    voronoi1.allocateArea(voronoi2);
    writeTestResult(voronoi1 instanceof VoronoiCell && voronoi1.getVertices() instanceof Array &&
                    voronoi1.getVertices()[0] instanceof Point &&
                    voronoi1.getVertices()[0].getX() == 0 && voronoi1.getVertices()[0].getY() == 0 &&
                    voronoi1.getVertices()[1] instanceof Point &&
                    voronoi1.getVertices()[1].getX() == 364+2/7 && voronoi1.getVertices()[1].getY() == 0 &&
                    voronoi1.getVertices()[2] instanceof Point &&
                    voronoi1.getVertices()[2].getX() == 507+1/7 && voronoi1.getVertices()[2].getY() == 500 &&
                    voronoi1.getVertices()[3] instanceof Point &&
                    voronoi1.getVertices()[3].getX() == 0 && voronoi1.getVertices()[3].getY() == 500 &&
                    voronoi2 instanceof VoronoiCell && voronoi2.getVertices() instanceof Array &&
                    voronoi2.getVertices()[0] instanceof Point &&
                    voronoi2.getVertices()[0].getX() == 364+2/7 && voronoi2.getVertices()[0].getY() == 0 &&
                    voronoi2.getVertices()[1] instanceof Point &&
                    voronoi2.getVertices()[1].getX() == 1000 && voronoi2.getVertices()[1].getY() == 0 &&
                    voronoi2.getVertices()[2] instanceof Point &&
                    voronoi2.getVertices()[2].getX() == 1000 && voronoi2.getVertices()[2].getY() == 500 &&
                    voronoi2.getVertices()[3] instanceof Point &&
                    voronoi2.getVertices()[3].getX() == 507+1/7 && voronoi2.getVertices()[3].getY() == 500,
                    "Dzielenie się powierzchnią dowolnych punktów");
    voronoi1 = new VoronoiCell(new Point(100, 400));
    voronoi2 = new VoronoiCell(new Point(800, 200));
    voronoi1.addVertice(new Point(0, 0));
    voronoi1.addVertice(new Point(450, 0));
    voronoi1.addVertice(new Point(450, 500));
    voronoi1.addVertice(new Point(0, 500));
    voronoi2.addVertice(new Point(450, 0));
    voronoi2.addVertice(new Point(1000, 0));
    voronoi2.addVertice(new Point(1000, 500));
    voronoi2.addVertice(new Point(450, 500));
    voronoi1.allocateArea(voronoi2);
    writeTestResult(voronoi1 instanceof VoronoiCell && voronoi1.getVertices() instanceof Array &&
                    voronoi1.getVertices()[0] instanceof Point &&
                    voronoi1.getVertices()[0].getX() == 0 && voronoi1.getVertices()[0].getY() == 0 &&
                    voronoi1.getVertices()[1] instanceof Point &&
                    voronoi1.getVertices()[1].getX() == 364+2/7 && voronoi1.getVertices()[1].getY() == 0 &&
                    voronoi1.getVertices()[2] instanceof Point &&
                    voronoi1.getVertices()[2].getX() == 450 && voronoi1.getVertices()[2].getY() == 300 &&
                    voronoi1.getVertices()[3] instanceof Point &&
                    voronoi1.getVertices()[3].getX() == 450 && voronoi1.getVertices()[3].getY() == 500 &&
                    voronoi1.getVertices()[4] instanceof Point &&
                    voronoi1.getVertices()[4].getX() == 0 && voronoi1.getVertices()[4].getY() == 500 &&
                    voronoi2 instanceof VoronoiCell && voronoi2.getVertices() instanceof Array &&
                    voronoi2.getVertices()[0] instanceof Point &&
                    voronoi2.getVertices()[0].getX() == 450 && voronoi2.getVertices()[0].getY() == 0 &&
                    voronoi2.getVertices()[1] instanceof Point &&
                    voronoi2.getVertices()[1].getX() == 1000 && voronoi2.getVertices()[1].getY() == 0 &&
                    voronoi2.getVertices()[2] instanceof Point &&
                    voronoi2.getVertices()[2].getX() == 1000 && voronoi2.getVertices()[2].getY() == 500 &&
                    voronoi2.getVertices()[3] instanceof Point &&
                    voronoi2.getVertices()[3].getX() == 507+1/7 && voronoi2.getVertices()[3].getY() == 500 &&
                    voronoi2.getVertices()[4] instanceof Point &&
                    voronoi2.getVertices()[4].getX() == 450 && voronoi2.getVertices()[4].getY() == 300,
                    "Dzielenie się powierzchnią dowolnych punktów o różnym wstępnym obszarze");
    voronoi1 = new VoronoiCell(new Point(20, 200));
    voronoi2 = new VoronoiCell(new Point(100, 200));
    voronoi1.addVertice(new Point(0, 0));
    voronoi1.addVertice(new Point(1000, 0));
    voronoi1.addVertice(new Point(1000, 500));
    voronoi1.addVertice(new Point(0, 500));
    voronoi2.addVertice(new Point(0, 0));
    voronoi2.addVertice(new Point(1000, 0));
    voronoi2.addVertice(new Point(1000, 500));
    voronoi2.addVertice(new Point(0, 500));
    voronoi1.allocateArea(voronoi2);
    writeTestResult(voronoi1 instanceof VoronoiCell && voronoi1.getVertices() instanceof Array &&
                    voronoi1.getVertices()[0] instanceof Point &&
                    voronoi1.getVertices()[0].getX() == 0 && voronoi1.getVertices()[0].getY() == 0 &&
                    voronoi1.getVertices()[1] instanceof Point &&
                    voronoi1.getVertices()[1].getX() == 60 && voronoi1.getVertices()[1].getY() == 0 &&
                    voronoi1.getVertices()[2] instanceof Point &&
                    voronoi1.getVertices()[2].getX() == 60 && voronoi1.getVertices()[2].getY() == 500 &&
                    voronoi1.getVertices()[3] instanceof Point &&
                    voronoi1.getVertices()[3].getX() == 0 && voronoi1.getVertices()[3].getY() == 500 &&
                    voronoi2 instanceof VoronoiCell && voronoi2.getVertices() instanceof Array &&
                    voronoi2.getVertices()[0] instanceof Point &&
                    voronoi2.getVertices()[0].getX() == 60 && voronoi2.getVertices()[0].getY() == 0 &&
                    voronoi2.getVertices()[1] instanceof Point &&
                    voronoi2.getVertices()[1].getX() == 1000 && voronoi2.getVertices()[1].getY() == 0 &&
                    voronoi2.getVertices()[2] instanceof Point &&
                    voronoi2.getVertices()[2].getX() == 1000 && voronoi2.getVertices()[2].getY() == 500 &&
                    voronoi2.getVertices()[3] instanceof Point &&
                    voronoi2.getVertices()[3].getX() == 60 && voronoi2.getVertices()[3].getY() == 500,
                    "Dzielenie się powierzchnią punktów na poziomej linii");
    voronoi1 = new VoronoiCell(new Point(900, 450));
    voronoi2 = new VoronoiCell(new Point(900, 490));
    voronoi1.addVertice(new Point(0, 0));
    voronoi1.addVertice(new Point(1000, 0));
    voronoi1.addVertice(new Point(1000, 500));
    voronoi1.addVertice(new Point(0, 500));
    voronoi2.addVertice(new Point(0, 0));
    voronoi2.addVertice(new Point(1000, 0));
    voronoi2.addVertice(new Point(1000, 500));
    voronoi2.addVertice(new Point(0, 500));
    voronoi1.allocateArea(voronoi2);
    writeTestResult(voronoi1 instanceof VoronoiCell && voronoi1.getVertices() instanceof Array &&
                    voronoi1.getVertices()[0] instanceof Point &&
                    voronoi1.getVertices()[0].getX() == 0 && voronoi1.getVertices()[0].getY() == 0 &&
                    voronoi1.getVertices()[1] instanceof Point &&
                    voronoi1.getVertices()[1].getX() == 1000 && voronoi1.getVertices()[1].getY() == 0 &&
                    voronoi1.getVertices()[2] instanceof Point &&
                    voronoi1.getVertices()[2].getX() == 1000 && voronoi1.getVertices()[2].getY() == 470 &&
                    voronoi1.getVertices()[3] instanceof Point &&
                    voronoi1.getVertices()[3].getX() == 0 && voronoi1.getVertices()[3].getY() == 470 &&
                    voronoi2 instanceof VoronoiCell && voronoi2.getVertices() instanceof Array &&
                    voronoi2.getVertices()[0] instanceof Point &&
                    voronoi2.getVertices()[0].getX() == 1000 && voronoi2.getVertices()[0].getY() == 470 &&
                    voronoi2.getVertices()[1] instanceof Point &&
                    voronoi2.getVertices()[1].getX() == 1000 && voronoi2.getVertices()[1].getY() == 500 &&
                    voronoi2.getVertices()[2] instanceof Point &&
                    voronoi2.getVertices()[2].getX() == 0 && voronoi2.getVertices()[2].getY() == 500 &&
                    voronoi2.getVertices()[3] instanceof Point &&
                    voronoi2.getVertices()[3].getX() == 0 && voronoi2.getVertices()[3].getY() == 470,
                    "Dzielenie się powierzchnią punktów na pionowej linii");
}

function createSpaceTest(){
    writeTestName("4. Test dodawania przestrzeni między komórkami");
    let voronoi = new VoronoiCell(new Point(5, 4));
    voronoi.addVertice(new Point(1, 7));
    voronoi.addVertice(new Point(7, 7));
    voronoi.addVertice(new Point(7, 1));
    voronoi.addVertice(new Point(1, 1));
    voronoi.createSpaces(1);
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices()[0] instanceof Point &&
                    voronoi.getVertices()[0].getX() == 2 && voronoi.getVertices()[0].getY() == 6 &&
                    voronoi.getVertices()[1] instanceof Point &&
                    voronoi.getVertices()[1].getX() == 6 && voronoi.getVertices()[1].getY() == 6 &&
                    voronoi.getVertices()[2] instanceof Point &&
                    voronoi.getVertices()[2].getX() == 6 && voronoi.getVertices()[2].getY() == 2 &&
                    voronoi.getVertices()[3] instanceof Point &&
                    voronoi.getVertices()[3].getX() == 2 && voronoi.getVertices()[3].getY() == 2,
                    "Dodanie przestrzeni w kwadracie");
    voronoi = new VoronoiCell(new Point(5, 5));
    voronoi.addVertice(new Point(1, 8));
    voronoi.addVertice(new Point(8, 7));
    voronoi.addVertice(new Point(9, 4));
    voronoi.addVertice(new Point(5, 2));
    voronoi.addVertice(new Point(1, 1));
    voronoi.createSpaces(1);
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices()[0] instanceof Point &&
                    voronoi.getVertices()[0].getX() == 2 &&
                    voronoi.getVertices()[0].getY() >= 6 && voronoi.getVertices()[0].getY() <= 7 &&
                    voronoi.getVertices()[1] instanceof Point &&
                    voronoi.getVertices()[1].getX() >= 7 && voronoi.getVertices()[1].getX() <= 8 &&
                    voronoi.getVertices()[1].getY() >= 6 && voronoi.getVertices()[1].getY() <= 7 &&
                    voronoi.getVertices()[2] instanceof Point &&
                    voronoi.getVertices()[2].getX() >= 7 && voronoi.getVertices()[2].getX() <= 8 &&
                    voronoi.getVertices()[2].getY() >= 4 && voronoi.getVertices()[2].getY() <= 5 &&
                    voronoi.getVertices()[3] instanceof Point &&
                    voronoi.getVertices()[3].getX() >= 4 && voronoi.getVertices()[3].getX() <= 5 &&
                    voronoi.getVertices()[3].getY() >= 2 && voronoi.getVertices()[3].getY() <= 3 &&
                    voronoi.getVertices()[4] instanceof Point &&
                    voronoi.getVertices()[4].getX() == 2 &&
                    voronoi.getVertices()[4].getY() >= 2 && voronoi.getVertices()[4].getY() <= 3,
                    "Dodanie przestrzeni w pięciokącie");
    voronoi = new VoronoiCell(new Point(1060, 444));
    voronoi.addVertice(new Point(1060, 295.3740740740741));
    voronoi.addVertice(new Point(1060, 620.2041666666667));
    voronoi.addVertice(new Point(929.4393375511726, 438.50724475871505));
    voronoi.createSpaces(10);
    writeTestResult(voronoi instanceof VoronoiCell && voronoi.getVertices() instanceof Array &&
                    voronoi.getVertices().length == 3,
                    "Dodanie przestrzeni w trójkącie położonym na skraju generatora");
}