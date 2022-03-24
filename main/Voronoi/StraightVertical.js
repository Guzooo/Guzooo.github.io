class StraightVertical extends Straight{
    #x;

    constructor(x){
        super(Infinity, undefined);
        this.#x = x;
    }

    findCommonPoint(otherStraight){
        if(this.#isParallel(otherStraight))
            return false;
        return otherStraight.findCommonPoint(this);
    }

    isPointInside(point){
        if(this.#isStartAndEndDefined())
            return this.#isPointInsideBetweenStartEndPoints(point);
        return this.#isPointInside(point);
    }

    getX(){
        return this.#x;
    }

    #isParallel(otherStraight){
        if(isFinite(otherStraight.getA()))
            return false;
        return true;
    }

    #isStartAndEndDefined(){
        if(this.getStart() instanceof Point && this.getEnd() instanceof Point)
            return true;
        return false;
    }

    #isPointInsideBetweenStartEndPoints(point){
        if(!this.#isPointInside(point))
            return false;
        let yStart = this.getStart().getY();
        let yEnd = this.getEnd().getY();
        let y = point.getY();
        if(yStart <= y && y <= yEnd)
            return true;
        if(yStart >= y && y >= yEnd)
            return true;
        return false;
    }

    #isPointInside(point){
        let x = this.#x;
        let pointX = point.getX();
        if(x == pointX)
            return true;
        return false;
    }
}