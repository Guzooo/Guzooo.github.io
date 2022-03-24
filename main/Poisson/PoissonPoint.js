class PoissonPoint extends Point{
    #active = true;
    #distanceX;
    #distanceY;

    constructor(x, y, distanceX, distanceY){
        super(x, y);
        this.#distanceX = distanceX;
        this.#distanceY = distanceY;
    }
    
    getNewPoint(distanceX, distanceY){
        let x = this.#getNewX();
        let y = this.#getNewY(x);
        let point = new PoissonPoint(x, y, distanceX, distanceY);
        if(this.isPointCanExsist(point))
            return point;
        return this.getNewPoint(distanceX, distanceY);
    }

    isPointCanExsist(point){
        let lenght = PointUtils.getLenghtBetweenPoints(this, point);
        let straight = Straight.getContainingPoints(this, point);
        let a = straight.getA();
        let distance = this.#distanceY;
        if(a >= -1/3 && a <= 1/3)
            distance = this.#distanceX;
        if(lenght < distance)
            return false;
        return true;
    }

    deactivate(){
        this.#active = false;
    }

    isActive(){
        return this.#active;
    }

    #getNewX(){
        let x = this.getX();
        let distanceX = this.#distanceX;
        let minX = x - distanceX;
        let maxX = x + distanceX;
        return MathUtils.getRandomInt(minX, maxX);
    }

    #getNewY(newX){
        let distanceX = this.#distanceX;
        let distanceY = this.#distanceY;
        let random = MathUtils.getRandomInt(1,2);
        if(random == 1)
            return this.#getNewYOnThisDistance(newX, distanceX);
        return this.#getNewYOnThisDistance(newX, distanceY); 

    }

    #getNewYOnThisDistance(newX, distance){
        let x = this.getX();
        let y = this.getY();

        let a = 1;
        let b = -2 * y;
        let c = Math.pow(x, 2) - 2 * x * newX + Math.pow(newX, 2) + Math.pow(y, 2) - Math.pow(distance, 2);
        
        let delta = Math.pow(b, 2) - 4 * c * a;
        if(delta < 0)
            return -1;
        let deltaSQRT = Math.sqrt(delta);
        let newY1 = (-1 * b - deltaSQRT) / (2 * a);
        let newY2 = (-1 * b + deltaSQRT) / (2 * a);
        
        let random = MathUtils.getRandomInt(1, 2);
        if(random == 1)
            return newY1;
        return newY2;
    }
}