class PointUtils{
    
    static getLenghtBetweenPoints(point1, point2){
        let x1 = point1.getX();
        let y1 = point1.getY();
        let x2 = point2.getX();
        let y2 = point2.getY();
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));    
    }
}