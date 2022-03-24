class Straight{
    #a;
    #b;
    #start;
    #end;

    constructor(a, b){
        this.#a = a;
        this.#b = b;
    }

    static getPerpendicularToPoints(point1, point2){
        let straight = this.getContainingPoints(point1, point2);
        let pointBetween = this.#getPointBetweenPoints(point1, point2);
        if(this.#isHorizontalStraight(straight))
            return new StraightVertical(pointBetween.getX());
        return this.#getPerpendicularStraight(straight, pointBetween);
    }

    static getContainingPoints(point1, point2){
        if(this.#isVerticalStraight(point1, point2))
            return new StraightVertical(point1.getX());
        return this.#getStraight(point1, point2);
    }

    findCommonPoint(otherStraight){
        if(this.#isParallel(otherStraight))
            return false;
        let point = this.#getCommonPoint(otherStraight);
        if(this.isPointInside(point) && otherStraight.isPointInside(point))
            return point;
        return false;
    }

    isPointInside(point){
        if(this.#isStartAndEndDefined())
            return this.#isPointInsideBetweenStartEndPoints(point);
        return this.#isPointInside(point);
    }

    getStart(){
        return this.#start;
    }

    setStartPoint(point){
        let old = this.#start;
        this.#start = undefined; 
        this.#start = this.#getStartOrEndPoint(old, point);
    }

    getEnd(){
        return this.#end;
    }

    setEndPoint(point){
        let old = this.#end;
        this.#end = undefined;
        this.#end = this.#getStartOrEndPoint(old, point);
    }

    getA(){
        return this.#a;
    }

    getB(){
        return this.#b;
    }

    static #getPointBetweenPoints(point1, point2){
        let x1 = point1.getX();
        let y1 = point1.getY();
        let x2 = point2.getX();
        let y2 = point2.getY();
        return new Point((x1 + x2)/2, (y1 + y2) /2);
    }

    static #isHorizontalStraight(otherStraight){
        if(otherStraight.getA() == 0)
            return true;
        return false;
    }

    static #isVerticalStraight(point1, point2){
        if(point1.getX() == point2.getX())
            return true;
        return false;
    }

    static #getPerpendicularStraight(otherStraight, point){
        let a = this.#getPerpendicularA(otherStraight);
        if(a > 100 || a < -100)
            return new StraightVertical(point.getX());
        let b = this.#getB(a, point);
        return new Straight(a, b);
    }

    static #getStraight(point1, point2){
        let a = this.#getA(point1, point2);
        let b = this.#getB(a, point1);
        return new Straight(a, b);
    }

    static #getPerpendicularA(otherStraight){
        return -1/otherStraight.getA();
    }

    static #getA(point1, point2){
        let x1 = point1.getX();
        let y1 = point1.getY();
        let x2 = point2.getX();
        let y2 = point2.getY();
        return (y2 - y1) / (x2 - x1);
    }

    static #getB(a, point){
        let x = point.getX();
        let y = point.getY();
        return y - a * x;
    }

    #isParallel(otherStraight){
        let a = this.#a
        let otherA = otherStraight.getA();
        if(a == otherA)
            return true;
        return false;
    }

    #getCommonPoint(otherStraight){
        let x = this.#getCommonX(otherStraight);
        let y = this.#getY(x);
        return new Point(x, y);
    }

    #getCommonX(otherStraight){
        if(this.#isVerticalStraightObject(otherStraight))
            return otherStraight.getX();
        let a = this.#a;
        let b = this.#b;
        let otherA = otherStraight.getA();
        let otherB = otherStraight.getB();
        return (otherB - b) / (a - otherA);
    }

    #getY(x){
        let a = this.#a;
        let b = this.#b;
        return x * a + b;
    }

    #isVerticalStraightObject(otherStraight){
        if(otherStraight instanceof StraightVertical)
            return true;
        return false;
    }

    #isStartAndEndDefined(){
        if(this.#start instanceof Point && this.#end instanceof Point)
            return true;
        return false;
    }

    #isPointInsideBetweenStartEndPoints(point){
        let allLenght = PointUtils.getLenghtBetweenPoints(this.#start, this.#end);
        let startPointLenght = PointUtils.getLenghtBetweenPoints(this.#start, point);
        let endPointLenght = PointUtils.getLenghtBetweenPoints(this.#end, point);
        if(MathUtils.isNumbersEqualWithAccuracy(allLenght,
                                                startPointLenght + endPointLenght,
                                                0.001))
            return true;
        return false;
    }

    #isPointInside(point){
        let x = point.getX();
        let y = point.getY();
        let a = this.#a;
        let b = this.#b;
        if(MathUtils.isNumbersEqualWithAccuracy(y,
                                                a * x + b,
                                                0.001))
            return true;
        return false;
    }

    #getStartOrEndPoint(oldPoint, newPoint){
        if(this.isPointInside(newPoint))
            return newPoint;
        return oldPoint;
    }
}