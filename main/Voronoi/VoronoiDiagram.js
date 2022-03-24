class VoronoiDiagram {
    #poisson;
    #spikesCreator;
    #spaceMax;
    #spaceMin;
    #canvasWidth;
    #canvasHeight;
    #voronoiCells = [];
    #noiseDistanceMin;
    #noiseDistanceMax;
    #noiseMaps = [];
    #spaceColors;
    #cellColors;
    #brightnessRadius;
    #centerBrightness;
    #countOfDiffusion;

    setPoisson(poisson) {
        this.#poisson = poisson;
    }

    setSpikesCreator(creator) {
        this.#spikesCreator = creator;
    }

    setSpace(min, max) {
        this.#spaceMin = min;
        this.#spaceMax = max;
    }

    setNoiseDistance(min, max) {
        this.#noiseDistanceMin = min;
        this.#noiseDistanceMax = max;
    }

    setSpaceColors(colors) {
        this.#spaceColors = colors;
    }

    setCellColors(colors) {
        this.#cellColors = colors;
    }

    setBrightnessRadius(radius) {
        this.#brightnessRadius = radius;
    }

    setCenterBrightness(brightness) {
        this.#centerBrightness = brightness;
    }

    setCountOfDiffusion(count) {
        this.#countOfDiffusion = count;
    }

    createDiagram(canvas) {
        DrawUtils.initialization(canvas);
        this.#clear();
        this.#setCanvasDimensions(canvas);
        this.#poisson.createPoints();
        this.#createCells();
        this.#confrontAreas();
        this.#createSpaces();
        this.#createStandardNoises();
        this.#createBrightnessNoices();
        this.#createSpikes();
        this.#draw();
    }

    #clear() {
        DrawUtils.clear();
        this.#poisson.clear();
        this.#voronoiCells = [];
        this.#noiseMaps = [];
    }

    #setCanvasDimensions(canvas) {
        this.#canvasWidth = canvas.width;
        this.#canvasHeight = canvas.height;
        this.#poisson.setDimensions(canvas.width, canvas.height);
    }

    #createCells() {
        for (let i = 0; i < this.#poisson.getPoints().length; i++) {
            let voronoiCell = this.#getNewCell(i);
            this.#voronoiCells.push(voronoiCell);
        }
    }

    #confrontAreas() {
        for (let i = 0; i < this.#voronoiCells.length - 1; i++) {
            for (let j = i + 1; j < this.#voronoiCells.length; j++) {
                let voronoiCell1 = this.#voronoiCells[i];
                let voronoiCell2 = this.#voronoiCells[j];
                voronoiCell1.allocateArea(voronoiCell2);
            }
        }
    }

    #createSpaces() {
        for (let i = 0; i < this.#voronoiCells.length; i++) {
            let voronoiCell = this.#voronoiCells[i];
            let space = MathUtils.getRandomInt(this.#spaceMin, this.#spaceMax);
            voronoiCell.createSpaces(space);
        }
    }

    #createStandardNoises() {
        let noiseGenerator = new NoiseGenerator();
        noiseGenerator.setDimensions(this.#canvasWidth, this.#canvasHeight);
        noiseGenerator.setDistance(this.#noiseDistanceMin, this.#noiseDistanceMax);
        noiseGenerator.setForce(-5, 5);
        noiseGenerator.generateNoise();
        this.#addNoiseMap(noiseGenerator);
    }


    #createBrightnessNoices() {
        let brightness = this.#centerBrightness;
        let radius = this.#brightnessRadius;
        let points = this.#poisson.getPoints();
        let noiseGenerator = new NoiseGenerator();
        noiseGenerator.setForce(brightness, brightness);
        noiseGenerator.setRange(1.3 * radius, 1.5 * radius);
        noiseGenerator.generateNoiseWithThisPoints(points);
        this.#addNoiseMap(noiseGenerator);
    }

    #addNoiseMap(map) {
        this.#noiseMaps.push(map);
    }

    #createSpikes() {
        for (let i = 0; i < this.#voronoiCells.length; i++) {
            let creator = this.#spikesCreator;
            let voronoiCell = this.#voronoiCells[i];
            voronoiCell.createSpikes(creator);
        }
    }

    #draw() {
        this.#drawBackground();
        this.#drawPrototypeCells();
        this.#paint();
        this.#doDiffusion();
    }

    #drawBackground() {
        DrawUtils.setBackground(this.#spaceColors[0]);
    }

    #drawPrototypeCells() {
        for (let i = 0; i < this.#voronoiCells.length; i++) {
            let voronoiCell = this.#voronoiCells[i];
            DrawUtils.drawBlackPolygon(voronoiCell.getVertices());
        }
        return true;
    }

    #paint() {
        let canvasData = DrawUtils.ifPixelIsBlackArray();
        for (let x = 0; x <= this.#canvasWidth; x++) {
            for (let y = 0; y <= this.#canvasHeight; y++) {
                let position = this.#canvasWidth * y + x;
                let point = new Point(x, y);
                if (canvasData[position])
                    this.#paintTheCell(point);
                else
                    this.#paintTheSpace(point);
            }
        }
    }

    #doDiffusion() {
        let d = new Diffusion();
        d.startDiffusion(canvas, this.#countOfDiffusion);
    }

    #paintTheCell(point) {
        let value = 0;
        this.#noiseMaps.forEach(map => {
            value += map.getPointValue(point);
        });
        value = Math.round(value);
        value += 20;
        if (value < 0)
            value = 0;
        if (value > 40)
            value = 40;
        DrawUtils.drawPoint(point, this.#cellColors[value]);
    }

    #paintTheSpace(point) {
        let value = 0;
        this.#noiseMaps.forEach(map => {
            value += map.getPointValue(point);
        });
        value = Math.round(value);
        value += 5;
        if (value < 0)
            value = 0;
        if (value > 10)
            value = 10;
        DrawUtils.drawPoint(point, this.#spaceColors[value]);
    }

    #getNewCell(i) {
        let x = Math.round(this.#poisson.getPoints()[i].getX());
        let y = Math.round(this.#poisson.getPoints()[i].getY());
        let voronoiCenter = new Point(x, y);
        let voroniCell = new VoronoiCell(voronoiCenter);
        const addSize = DimensionContants.ADDITIONAL_CANVAS_SIZE;
        voroniCell.addVertice(new Point(-1 * addSize, -1 * addSize));
        voroniCell.addVertice(new Point(this.#canvasWidth + addSize, -1 * addSize));
        voroniCell.addVertice(new Point(this.#canvasWidth + addSize, this.#canvasHeight + addSize));
        voroniCell.addVertice(new Point(-1 * addSize, this.#canvasHeight + addSize));
        return voroniCell;
    }
}