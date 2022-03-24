testedFiles = [ "DimensionConstants",
                "MathUtils", "Point", "PointUtils",
                "Voronoi/Straight", "Voronoi/StraightVertical", "Voronoi/VoronoiCell",
                "Poisson/PoissonProces", "Poisson/PoissonPoint", 
                "Noise/NoisePoint", "Noise/NoiseGenerator",
                "SpikesCreator"];
testFiles = ["MathUtils", "Point", "PointUtils",
            "Voronoi/Straight", "Voronoi/VoronoiCell",
            "Poisson/PoissonPoint", "Poisson/PoissonProces", 
            "Noise/NoisePoint", "Noise/NoiseGenerator",
            "SpikesCreator"];

innerAllTested();
innerAllTest();

function innerAllTested(){
    for(let i = 0; i < testedFiles.length; i++){
        document.write("<script type='text/javascript' src='../main/"+ testedFiles[i] +".js'></script>")
    }
}

function innerAllTest(){
    for(let i = 0; i < testFiles.length; i++){
        document.write("<h2>" + getName(i) + "</h2>");
        document.write("<script type='text/javascript' src='"+ testFiles[i] +".test.js'></script>");
    }
}

function getName(i){
    let tittle = "";
    let name = testFiles[i];
    for(let i = 0; i < name.length; i++){
        let char = name[i];
        if(!isNumber(char) && char == char.toUpperCase())
            tittle += " ";
        if(char == "/")
            tittle += "•";
        else
            tittle += char;
    }
    return tittle;
}

function writeTestName(name){
    document.write("<h4>"+name+"</h4>");
}

function writeTestResult(condition, note){
    let result = "fail";
    if(condition)
        result = "pass";
    document.write("<p class='"+result+"'>"+note+"</p>");
}

function isNumber(char){
    if(isNaN(char * 1))
        return false;
    return true;
}