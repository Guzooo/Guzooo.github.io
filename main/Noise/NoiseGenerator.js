class NoiseGenerator{
    #maxX;
    #maxY;
    #distanceMin;
    #distanceMax; 
    #rangeMin;
    #rangeMax;
    #forceMin;
    #forceMax;
    #points = [];

    setDimensions(maxX, maxY){
        this.#maxX = maxX;
        this.#maxY = maxY;
    }

    setDistance(distanceMin, distanceMax){
        this.#distanceMin = distanceMin;
        this.#distanceMax = distanceMax;
    }

    setRange(rangeMin, rangeMax){
        this.#rangeMin = rangeMin;
        this.#rangeMax = rangeMax;
    }

    setForce(forceMin, forceMax){
        this.#forceMin = forceMin;
        this.#forceMax = forceMax;
    }
    
    generateNoise(){
        let poisson = this.#getPoison();
        let points = poisson.getPoints();
        this.generateNoiseWithThisPoints(points);
    }

    generateNoiseWithThisPoints(points){
        this.#setStandardRange();
        this.#createNoisePoints(points);
    }

    getPointValue(point){
        let value = 0;
        this.#points.forEach(noisePoint => {
            let thisPointValue = noisePoint.getValue(point);
            value += thisPointValue;
        });
        return value;
    }

    #getPoison(){
        let poisson = new PoissonProces();
        poisson.setDimensions(this.#maxX, this.#maxY);
        poisson.setDistanceX(this.#distanceMin, this.#distanceMax);
        poisson.setDistanceY(this.#distanceMin, this.#distanceMax);
        poisson.createPoints();
        return poisson;
    }

    #setStandardRange(){
        if(typeof this.#rangeMin == "undefined" && typeof this.#rangeMax == "undefined")
            this.setRange(2/3 * this.#distanceMax, this.#distanceMax);
    }

    #createNoisePoints(points){
        points.forEach(point => {
            let x = point.getX();
            let y = point.getY();
            let range = this.#getRandomRange();
            let force = this.#getRandomForce();
            let noisePoint = new NoisePoint(x, y, force, range);
            this.#points.push(noisePoint);
        });
    }
    
    #getRandomRange(){
        return MathUtils.getRandomInt(this.#rangeMin, this.#rangeMax);
    }

    #getRandomForce(){
        return MathUtils.getRandomInt(this.#forceMin, this.#forceMax);
    }
}