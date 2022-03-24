class NoisePoint extends Point{
    #force;
    #range;

    constructor(x, y, force, range){
        super(x, y);
        this.#force = force;
        this.#range = range;
    }

    getValue(point){
        if(!this.#isInside(point))
            return 0;  
        let distance = PointUtils.getLenghtBetweenPoints(point, this);
        let a = this.#force / (-1 * Math.pow(this.#range, 2));
        let c = this.#force;
        return a * Math.pow(distance, 2) + c;

    }

    #isInside(point){
        let distance = PointUtils.getLenghtBetweenPoints(point, this);
        if(distance < this.#range)
            return true;
        return false;
    }
}