class SpikesCreator {
    #spikesSize;
    #spikesCount;
    #spineMaxHeight;
    #countOfTryBuild;
    #countOfTryBuildOfThisStraight;

    setSpikesSize(size) {
        this.#spikesSize = size;
    }

    setSpikesCount(count) {
        this.#spikesCount = count;
    }

    setSpineMaxHeight(maxHeight) {
        this.#spineMaxHeight = maxHeight;
    }

    getStraightWithSpikes(verticeI, verticeII, center) {
        let size = this.#spikesSize;
        let count = this.#spikesCount;
        let vertices = [verticeI, verticeII];
        while (size > 0 && count > 0) {
            if (count < 1) {
                let chance = count * 100;
                let r = MathUtils.getRandomInt(1, 100);
                if (chance < r) {
                    count--;
                    continue;
                }
            }
            let countInThisSize = this.#getCountOfSpikesInThisSize(size);
            let straights = this.#createStraightsFromPoints(vertices);
            let spikes = [];
            this.#countOfTryBuild = 10;
            while (countInThisSize > 0 && count > 0 && this.#countOfTryBuild > 0) {
                this.#countOfTryBuildOfThisStraight = 10;
                let random = MathUtils.getRandomInt(0, straights.length - 1);
                let straight = straights[random];
                let spikeWidth = this.#getWidthOfSpikesInThisSize(size);
                let spikeHeight = this.#getHeightOfSpikesInThisSize(size);
                let spikeSaveZone = this.#getSaveSpaceInThisSize(size, straight);
                let pointsOfSpike = this.#getPointsToBuildSpike(straight, spikeWidth, spikeSaveZone, center);
                if (pointsOfSpike.length > 2) {
                    pointsOfSpike[1] = this.#getRaisedVerticeOfSpikePoint(pointsOfSpike[1], straight, spikeHeight, center);
                    spikes = spikes.concat(pointsOfSpike);
                    let newStraights = this.#separateStraightByTheSpike(straight, pointsOfSpike);
                    straights.splice(random, 1, newStraights[0], newStraights[1]);
                    countInThisSize--;
                    count--;
                } else {
                    this.#countOfTryBuild--;
                }
            }
            vertices = this.#getNewVerticesFromStraightAndSpikes(straights, spikes);
            if (size == 6) {
                size - 2;
            }
            size -= 2;
            if (size == 0) {
                size = 1;
            }
        }
        return vertices;
    }

    #getCountOfSpikesInThisSize(size) {
        size = parseInt(size);
        switch (size) {
            case 6:
                return 2;
            case 5:
                return 2;
            case 4:
                return 2;
            case 3:
                return 4;
            case 2:
                return 10;
            case 1:
                return 20;
        }
    }

    #getWidthOfSpikesInThisSize(size) {
        size = parseInt(size);
        switch (size) {
            case 6:
                return MathUtils.getRandom(50, 60);
            case 5:
                return MathUtils.getRandom(20, 25);
            case 4:
                return MathUtils.getRandom(40, 60);
            case 3:
                return MathUtils.getRandom(20, 40);
            case 2:
                return MathUtils.getRandom(10, 15);
            case 1:
                return MathUtils.getRandom(5, 10);
        }
    }

    #getHeightOfSpikesInThisSize(size) {
        size = parseInt(size);
        let maxHeight = this.#spineMaxHeight;
        switch (size) {
            case 6:
                return MathUtils.getRandom(maxHeight * 140 / 150, maxHeight);
            case 5:
                return MathUtils.getRandom(maxHeight * 140 / 150, maxHeight);
            case 4:
                return MathUtils.getRandom(maxHeight * 70 / 150, maxHeight * 100 / 150);
            case 3:
                return MathUtils.getRandom(maxHeight * 25 / 75, maxHeight * 35 / 75);
            case 2:
                return MathUtils.getRandom(maxHeight * 20 / 75, maxHeight * 25 / 75);
            case 1:
                return MathUtils.getRandom(maxHeight * 5 / 75, maxHeight * 10 / 75);
        }
    }

    #getSaveSpaceInThisSize(size, straight) {
        size = parseInt(size);
        let straightSize = PointUtils.getLenghtBetweenPoints(straight.getStart(), straight.getEnd());
        switch (size) {
            case 6:
                if (straightSize < 130)
                    return straightSize;
                return 30;
            case 5:
                if (straightSize < 3 * 25)
                    return straightSize;
                return (straightSize - 40) / 2;
            case 4:
                if (straightSize < 120)
                    return straightSize;
                return 20;
            case 3:
                if (straightSize < 100)
                    return straightSize;
                return 20;
            case 2:
                if (straightSize < 40)
                    return straightSize;
                return 10;
            case 1:
                if (straightSize < 30)
                    return straightSize;
                return 10;
        }
    }

    #createStraightsFromPoints(vertices) {
        let straights = [];
        for (let i = 0; i < vertices.length - 1; i++) {
            let ii = i + 1;
            let startVertice = vertices[i];
            let endVertice = vertices[ii];
            let straight = Straight.getContainingPoints(startVertice, endVertice);
            straight.setStartPoint(startVertice);
            straight.setEndPoint(endVertice);
            straights.push(straight);
        }
        return straights;
    }

    #getPointsToBuildSpike(straight, width, saveZone, center) {
        if (!this.#isEnoughSpace(straight, width, saveZone))
            return [straight.getStart(), straight.getEnd()];
        let saveStraight = this.#getStraightWithSaveZone(straight, saveZone);
        let pointI = this.#getFirstPointToBuildSpike(saveStraight, width);
        if (typeof pointI == "boolean" && !pointI)
            return [straight.getStart(), straight.getEnd()];
        let pointII = this.#getSecondPointToBuildSpike(pointI, saveStraight, width);
        let verticeOfSpike = this.#getVerticeOfSpike(pointI, pointII, center);
        return [pointI, verticeOfSpike, pointII];
    }

    #getRaisedVerticeOfSpikePoint(point, straight, spikeHeight, center) {
        let perpendicularStraight = this.#getPerpendicularStraight(point, straight);
        let points = this.#getPointsWithDistance(point, perpendicularStraight, spikeHeight);
        let lenghtI = PointUtils.getLenghtBetweenPoints(points[0], center);
        let lenghtII = PointUtils.getLenghtBetweenPoints(points[1], center);
        if (lenghtI < lenghtII)
            return points[0];
        return points[1];
    }

    #separateStraightByTheSpike(straight, pointsOfSpike) {
        let pointI = straight.getStart();
        let pointII = pointsOfSpike[0];
        let pointIII = pointsOfSpike[2];
        let pointIV = straight.getEnd();
        let straightI = Straight.getContainingPoints(pointI, pointII);
        let straightII = Straight.getContainingPoints(pointIII, pointIV);
        straightI.setStartPoint(pointI);
        straightI.setEndPoint(pointII);
        straightII.setStartPoint(pointIII);
        straightII.setEndPoint(pointIV);
        return [straightI, straightII];
    }

    #getNewVerticesFromStraightAndSpikes(straights, spikes) {
        let vertices = [];
        for (let i = 0; i < straights.length; i++) {
            let straight = straights[i];
            let verI = straight.getStart();
            let verII = straight.getEnd();
            vertices.push(verI, verII);
            for (let ii = 0; ii < spikes.length; ii++) {
                let verOfSpike = spikes[ii];
                if (verII == verOfSpike && ii + 1 != spikes.lenght)
                    vertices.push(spikes[ii + 1]);
            }
        }
        return vertices;
    }

    #getStraightWithSaveZone(straight, saveZone) {
        let saveStraight;
        if (straight instanceof StraightVertical)
            saveStraight = new StraightVertical(straight.getX());
        else
            saveStraight = new Straight(straight.getA(), straight.getB());
        let newStart = this.#getPointWithDistance(straight.getStart(), straight, saveZone);
        let newEnd = this.#getPointWithDistance(straight.getEnd(), straight, saveZone);
        saveStraight.setStartPoint(newStart);
        saveStraight.setEndPoint(newEnd);
        return saveStraight;
    }

    #isEnoughSpace(straight, width, saveZone) {
        let pointI = straight.getStart();
        let pointII = straight.getEnd();
        let lenght = PointUtils.getLenghtBetweenPoints(pointI, pointII);
        lenght -= width;
        lenght -= saveZone * 2;
        if (lenght < 0)
            return false;
        return true;
    }

    #getFirstPointToBuildSpike(straight, width) {
        if (this.#countOfTryBuildOfThisStraight == 0)
            return false;
        let x = this.#getX(straight.getStart(), straight.getEnd());
        let y = this.#getY(x, straight);
        let point = new Point(x, y);
        let lenghtToEnd = PointUtils.getLenghtBetweenPoints(point, straight.getEnd());
        if (lenghtToEnd < width) {
            this.#countOfTryBuildOfThisStraight--;
            return this.#getFirstPointToBuildSpike(straight, width);
        }
        return point;
    }

    #getSecondPointToBuildSpike(point, straight, width) {
        straight.setStartPoint(point);
        return this.#getPointWithDistance(point, straight, width);
    }

    #getVerticeOfSpike(pointI, pointII, center) {
        let maxDistance = PointUtils.getLenghtBetweenPoints(pointI, pointII);
        let pointIToCenter = PointUtils.getLenghtBetweenPoints(pointI, center);
        let pointIIToCenter = PointUtils.getLenghtBetweenPoints(pointII, center);
        let distanceToSpike = MathUtils.getRandom(0, maxDistance * 1 / 3);
        let straight = Straight.getContainingPoints(pointI, pointII);
        straight.setStartPoint(pointI);
        straight.setEndPoint(pointII);
        let closerPointToCenter;
        if (pointIToCenter < pointIIToCenter)
            closerPointToCenter = pointI;
        else
            closerPointToCenter = pointII;
        return this.#getPointWithDistance(closerPointToCenter, straight, distanceToSpike);
    }

    #getPerpendicularStraight(point, straight) {
        if (straight instanceof StraightVertical)
            return new Straight(0, point.getY());
        let centerPerpendicular = Straight.getPerpendicularToPoints(straight.getStart(), straight.getEnd());
        if (centerPerpendicular instanceof StraightVertical)
            return new StraightVertical(point.getX());
        let a = centerPerpendicular.getA();
        let b = point.getY() - a * point.getX();
        return new Straight(a, b);
    }

    #getPointWithDistance(point, straight, distance) {
        let points = this.#getPointsWithDistance(point, straight, distance);
        let pointI = points[0];
        let pointII = points[1];
        let random = MathUtils.getRandomInt(1, 2);
        if (random == 1 && straight.isPointInside(pointI))
            return pointI;
        if (random == 2 && straight.isPointInside(pointII))
            return pointII;
        if (straight.isPointInside(pointI))
            return pointI;
        return pointII;
    }

    #getPointsWithDistance(point, straight, distance) {
        if (straight instanceof StraightVertical)
            return this.#getPointsWithDistanceVerticalOrientation(point, distance);
        let a = straight.getA();
        let b = straight.getB();
        let pointX = point.getX();
        let pointY = point.getY();
        let A = 1 + Math.pow(a, 2);
        let B = -2 * pointX + 2 * a * b - 2 * a * pointY;
        let C = Math.pow(pointX, 2) + Math.pow(b, 2) - 2 * b * pointY + Math.pow(pointY, 2) - Math.pow(distance, 2);
        let delta = Math.pow(B, 2) - 4 * A * C;
        if (delta < 0)
            return [point, point];
        let sqrtDelta = Math.sqrt(delta);
        let x1 = (-1 * B - sqrtDelta) / (2 * A);
        let x2 = (-1 * B + sqrtDelta) / (2 * A);
        let y1 = a * x1 + b;
        let y2 = a * x2 + b;
        let point1 = new Point(x1, y1);
        let point2 = new Point(x2, y2);
        return [point1, point2];
    }

    #getPointsWithDistanceVerticalOrientation(point, distance) {
        let x1 = point.getX();
        let x2 = point.getX();
        let y1 = point.getY() + distance;
        let y2 = point.getY() - distance;
        let point1 = new Point(x1, y1);
        let point2 = new Point(x2, y2);
        return [point1, point2];
    }

    #getX(pointI, pointII) {
        let xI = pointI.getX();
        let xII = pointII.getX();
        if (xI < xII)
            return MathUtils.getRandom(xI, xII);
        return MathUtils.getRandom(xII, xI);
    }

    #getY(x, straight) {
        if (straight instanceof StraightVertical)
            return this.#getVerticalY(straight);
        let a = straight.getA();
        let b = straight.getB();
        return a * x + b;
    }

    #getVerticalY(straight) {
        let pointI = straight.getStart();
        let pointII = straight.getEnd();
        let yI = pointI.getY();
        let yII = pointII.getY();
        if (yI < yII)
            return MathUtils.getRandom(yI, yII);
        return MathUtils.getRandom(yII, yI);
    }
}