class PoissonProces{
    #countOfTry;
    #points = [];
    #distanceXMin;
    #distanceXMax;
    #distanceYMin;
    #distanceYMax;
    #maxX;
    #maxY;

    setDistanceX(distanceMin, distanceMax){
        this.#distanceXMin = distanceMin;
        this.#distanceXMax = distanceMax;
    }

    setDistanceY(distanceMin, distanceMax){
        this.#distanceYMin = distanceMin;
        this.#distanceYMax = distanceMax;
    }

    setDimensions(maxX, maxY){
        this.#maxX = maxX;
        this.#maxY = maxY;
    }

    createPoints(){
        this.#createFirstPoint();
        this.#createNextPoints();
    }

    getPoints(){
        return this.#points;
    }

    clear(){
        this.#points = [];
    }

    #createFirstPoint(){
        let x = this.#getRandomX();
        let y = this.#getRandomY();
        let distanceX = this.#getRandomDistanceX();
        let distanceY = this.#getRandomDistanceY();
        let point = new PoissonPoint(x, y, distanceX, distanceY);
        this.#points.push(point);
    }

    #getRandomX(){
        const addSize = DimensionContants.ADDITIONAL_CANVAS_SIZE;
        return MathUtils.getRandomInt(-1 * addSize, this.#maxX + addSize);
    }

    #getRandomY(){
        const addSize = DimensionContants.ADDITIONAL_CANVAS_SIZE;
        return MathUtils.getRandomInt(-1 * addSize, this.#maxY + addSize);
    }

    #getRandomDistanceX(){
        return MathUtils.getRandomInt(this.#distanceXMin, this.#distanceXMax);
    }

    #getRandomDistanceY(){
        return MathUtils.getRandomInt(this.#distanceYMin, this.#distanceYMax);
    }

    #createNextPoints(){
        while(this.#isActivePoints()){
            let length = this.#getPointsLength();
            for(let i = 0; i < length; i++){
                this.#countOfTry = 100;
                this.#tryCreateNewPoint(i);
            }
        }
    }

    #isActivePoints(){
        let length = this.#getPointsLength();
        for(let i = 0; i < length; i++)
            if(this.#points[i].isActive())
                return true;
        return false;
    }

    #tryCreateNewPoint(i){
        let length = this.#getPointsLength();
        let distanceX = this.#getRandomDistanceX();
        let distanceY = this.#getRandomDistanceY();
        let point = this.#getPoint(i);
        if(this.#countOfTry == 0){
            point.deactivate();
            return;
        }
        if(!point.isActive())
            return;
        let newPoint = point.getNewPoint(distanceX, distanceY);
        if(!this.#isOnCanvas(newPoint)){
            this.#pointCannotCreated(i)
            return;
        }
        for(let j = 0; j < length; j++){
            if(!this.#canCreate(newPoint, j)){
                this.#pointCannotCreated(i)
                return;
            }
        }
        this.#addPoint(newPoint);
    }

    #getPointsLength(){
        return this.#points.length;
    }

    #getPoint(i){
        return this.#points[i];
    }

    #isOnCanvas(point){
        const addSize = DimensionContants.ADDITIONAL_CANVAS_SIZE;
        if(point.getX() < -1 * addSize)
            return false;
        if(point.getX() > this.#maxX + addSize)
            return false;
        if(point.getY() < -1 * addSize)
            return false;
        if(point.getY() > this.#maxY + addSize)
            return false;
        return true;
    }

    #canCreate(newPoint, i){
        let point = this.#getPoint(i);
        return point.isPointCanExsist(newPoint);
    }

    #pointCannotCreated(i){
        this.#countOfTry--;
        this.#tryCreateNewPoint(i);
    }

    #addPoint(point){
        this.#points.push(point);
    }
}