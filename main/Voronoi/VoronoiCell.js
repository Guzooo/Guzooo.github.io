class VoronoiCell{
    #center;
    #vertices = [];
    #newVertices = [];

    constructor(point){
        this.#center = point;
    }

    allocateArea(otherCell){
        let center = this.#center;
        let otherCenter = otherCell.getCenter();
        let border = this.#getBorder(otherCenter);
        this.#confrontVertices(otherCenter, border);
        otherCell.#confrontVertices(center, border);
    }

    createSpaces(space){
        let edges = this.#getNewEdges(space);
        edges.forEach(edge => {
            this.#cutCell(edge);
        });
    }

    createSpikes(spikesCreator){
        for(let i = 0; i < this.#getVerticesLenght(); i++){
            let ii = i+1;
            if(ii == this.#getVerticesLenght())
                ii = 0;
            let verticeI = this.#vertices[i];
            let verticeII = this.#vertices[ii];
            let straightWithSpikes = spikesCreator.getStraightWithSpikes(verticeI, verticeII, this.#center);
            for(let j = 0; j < straightWithSpikes.length-1; j++){
                let point = straightWithSpikes[j];
                this.#addNewVertice(point);
            }
        }
        this.clearVertices();
        this.#setVertices();
        this.#clearNewVertices();
    }

    getCenter(){
        return this.#center;
    }

    getVertices(){
        return this.#vertices;
    }

    addVertice(vertice){
        this.#vertices.push(vertice);
    }

    clearVertices(){
        this.#vertices = [];
    }

    #getBorder(otherCenter){
        let center = this.#center;
        return Straight.getPerpendicularToPoints(center, otherCenter);
    }

    #confrontVertices(otherCenter, border){
        this.#setNewVertices(otherCenter, border);
        this.clearVertices();
        this.#setVertices();
        this.#clearNewVertices();
    }

    #getNewEdges(space){
        let edges = [];
        for(let i = 0; i < this.#getVerticesLenght(); i++){
            let edge = this.#getNewEdge(i, space);
            edges.push(edge);
        }
        return edges;
    }

    #cutCell(straight){
        let firstCommonPoint = false;
        for(let i = 0; i < this.#getVerticesLenght(); i++){
            let oldStraight = this.#getStraight(i);
            let commonPoint = straight.findCommonPoint(oldStraight);
            if(firstCommonPoint)
                this.#addNewVertice(this.getVertices()[i]);
            if(commonPoint instanceof Point){
                this.#addNewVertice(commonPoint);
                if(!firstCommonPoint)
                    firstCommonPoint = true;
                else
                    break;
            }
        }
        if(!firstCommonPoint){
            for(let i = 1; i < this.#getVerticesLenght(); i++)
                this.#addNewVertice(this.getVertices()[i]);
            this.#addNewVertice(this.getVertices()[0]);          
        }
        this.clearVertices();
        this.#setVertices();
        this.#clearNewVertices();
    }

    #setNewVertices(otherCenter, border){
        for(let i = 0; i < this.#getVerticesLenght(); i++){
            this.#setNewVerticesExsisting(i, otherCenter);
            this.#setNewVertivesCommonOnes(i, border);      
        }
    }

    #setVertices(){
        this.#newVertices.forEach(verticie => {
            this.addVertice(verticie);
        });
    }

    #clearNewVertices(){
        this.#newVertices = [];
    }

    #getVerticesLenght(){
        return this.getVertices().length;
    }

    #setNewVerticesExsisting(i, otherCenter){
        let existingVertice = this.getVertices()[i];
        if(this.#isVertiveBelong(existingVertice, otherCenter))
            this.#addNewVertice(existingVertice);
    }

    #setNewVertivesCommonOnes(i, border){
        let newVertice = this.#getCommonPoint(i, border);
        if(newVertice instanceof Point)
            this.#addNewVertice(newVertice);
    }

    #isVertiveBelong(vertice, otherCenter){
        let center = this.#center;
        let lenght = PointUtils.getLenghtBetweenPoints(center, vertice);
        let otherLenght = PointUtils.getLenghtBetweenPoints(otherCenter, vertice);
        if(lenght <= otherLenght)
            return true;
        return false;
    }

    #getCommonPoint(i, border){
        let straight = this.#getStraight(i);
        return straight.findCommonPoint(border);
    }

    #addNewVertice(vertice){
        this.#newVertices.push(vertice);
    }

    #getNewEdge(i, space){
        let point = this.#getPointCloserCenter(i, space);
        let x = point.getX();
        let y = point.getY();
        let straight = this.#getStraight(i);
        if(straight instanceof StraightVertical)
            return new StraightVertical(x);
        let a = straight.getA();
        let b = y - a * x;
        return new Straight(a, b);
    }

    #getPointCloserCenter(i, space){
        let straight = this.#getStraight(i)
        let perpendicularStraight = Straight.getPerpendicularToPoints(straight.getStart(), straight.getEnd());
        let x1;
        let x2;
        let y1;
        let y2;
        if(straight instanceof StraightVertical){
            y1 = perpendicularStraight.getB();
            y2 = perpendicularStraight.getB();
            x1 = straight.getX() - space;
            x2 = straight.getX() + space;
        } else if (perpendicularStraight instanceof StraightVertical){
            x1 = perpendicularStraight.getX();
            x2 = perpendicularStraight.getX();
            y1 = straight.getB() - space;
            y2 = straight.getB() + space;
        } else {
            let a = perpendicularStraight.getA();
            let b = perpendicularStraight.getB();
            let A = straight.getA() * -1;
            let B = 1;
            let C = straight.getB() * -1;
            x1 = -1 * (B * b + C - space * Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2))) / (A + B * a);
            x2 = -1 * (B * b + C + space * Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2))) / (A + B * a);
            y1 = a * x1 + b;
            y2 = a * x2 + b;
        }
        let point1 = new Point(x1, y1);
        let point2 = new Point(x2, y2);
        let length1 = PointUtils.getLenghtBetweenPoints(point1, this.#center);
        let length2 = PointUtils.getLenghtBetweenPoints(point2, this.#center);
        if(length1 < length2)
            return point1;
        return point2;
    }

    #getStraight(i){
        let ii = i+1;
        if(ii == this.getVertices().length)
            ii = 0;
        let point1 = this.getVertices()[i];
        let point2 = this.getVertices()[ii];
        let straight = Straight.getContainingPoints(point1, point2);
        straight.setStartPoint(point1);
        straight.setEndPoint(point2);
        return straight;
    }
}