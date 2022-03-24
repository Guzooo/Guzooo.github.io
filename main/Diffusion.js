class Diffusion {
  #currentColors = [];
  #newColors = [];

  startDiffusion(canvas, numberRepetitions) {
    this.#readColors(canvas);
    this.#startProcess(numberRepetitions);
    this.#draw();
  }

  #readColors(canvas) {
    this.#currentColors = DrawUtils.getImageAsColorsArr();
    this.#newColors = JSON.parse(JSON.stringify(this.#currentColors));
  }

  #startProcess(numberRepetitions) {
    let width = this.#currentColors.length;
    let height = this.#currentColors[0].length;
    for (; numberRepetitions > 0; numberRepetitions--) {
      for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
          this.#spaceAnalysis(x, y);
        }
      }
      this.#replaceWithNew();
    }
  }

  #draw() {
    let width = this.#currentColors.length;
    let height = this.#currentColors[0].length;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let point = new Point(x, y);
        let color = this.#currentColors[x][y];
        let R = color[0];
        let G = color[1];
        let B = color[2];
        DrawUtils.drawPointWithRGB(point, R, G, B);
      }
    }
  }

  #spaceAnalysis(x, y) {
    let points = this.#getPointsAround(x, y);
    if (this.#isTheDarkestColor([x, y], points)) {
      let countOfThisColor = this.#getCountOfThisColor([x, y], points);
      let countOfPointToChange = this.#getCountOfPointToChange(countOfThisColor);
      this.#changePoints([x, y], points, countOfPointToChange);
    }
  }

  #replaceWithNew() {
    let width = this.#newColors.length;
    let height = this.#newColors[0].length;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        this.#currentColors[x][y] = this.#newColors[x][y];
      }
    }
  }

  #getPointsAround(x, y) {
    let points = [];
    points.push([x - 1, y - 1]);
    points.push([x - 1, y]);
    points.push([x - 1, y + 1]);
    points.push([x, y - 1]);
    points.push([x, y + 1]);
    points.push([x + 1, y - 1]);
    points.push([x + 1, y]);
    points.push([x + 1, y + 1]);
    return points;
  }

  #isTheDarkestColor(point, points) {
    let brightness = this.#getBrightessOfPoint(point);
    let arrayOfBrightness = this.#getBrightessOfPoints(points);
    for (let i = 0; i < arrayOfBrightness.length; i++) {
      let secondBrightness = arrayOfBrightness[i];
      if (brightness > secondBrightness)
        return false;
    }
    return true;
  }

  #getCountOfThisColor(point, points) {
    let count = 0;
    for (let i = 0; i < points.length; i++) {
      let secondPoint = points[i];
      if (this.#isSameColor(point, secondPoint))
        count++;
    }
    return count;
  }

  #getCountOfPointToChange(countOfThisColor) {
    let max = 8 - countOfThisColor;
    let count = 0;
    if (countOfThisColor > 4)
      count = MathUtils.getRandomInt(0, 3);
    else if (countOfThisColor > 2)
      count = MathUtils.getRandomInt(0, 2);
    else if (countOfThisColor > 0)
      count = MathUtils.getRandomInt(0, 1);
    if (count > max)
      return max;
    return count;
  }

  #changePoints(point, points, countOfPointToChange) {
    let painted = [];
    while (countOfPointToChange > 0) {
      let i = MathUtils.getRandomInt(0, points.length - 1);
      let secondPoint = points[i];
      if (!this.#isSameColor(point, secondPoint) && !painted.includes(i)) {
        this.#addPointToNewColors(point, secondPoint);
        painted.push(i);
        countOfPointToChange--;
      }
    }
  }

  #addPointToNewColors(point, secondPoint) {
    let x = point[0];
    let y = point[1];
    let secondX = secondPoint[0];
    let secondY = secondPoint[1];
    point = this.#currentColors[x][y];
    this.#newColors[secondX][secondY] = point;
  }

  #isSameColor(point, secondPoint) {
    let x = point[0];
    let y = point[1];
    let secondX = secondPoint[0];
    let secondY = secondPoint[1];
    point = this.#currentColors[x][y];
    secondPoint = this.#currentColors[secondX][secondY];
    let r = point[0];
    let g = point[1];
    let b = point[2];
    let secondR = secondPoint[0];
    let secondG = secondPoint[1];
    let secondB = secondPoint[2];
    if (r == secondR && g == secondG && b == secondB)
      return true;
    return false;
  }

  #getBrightessOfPoints(points) {
    let arrayOfBrightness = [];
    for (let i = 0; i < points.length; i++) {
      let point = points[i];
      let brightness = this.#getBrightessOfPoint(point);
      arrayOfBrightness.push(brightness);
    }
    return arrayOfBrightness;
  }

  #getBrightessOfPoint(point) {
    let x = point[0];
    let y = point[1];
    let colorPoint = this.#currentColors[x][y];
    let red = colorPoint[0];
    let green = colorPoint[1];
    let blue = colorPoint[2];
    return this.#getBrightnessOfRGB(red, green, blue);
  }

  #getBrightnessOfRGB(R, G, B) {
    return Math.sqrt((0.241 * Math.pow(R, 2)) +
      (0.671 * Math.pow(G, 2)) +
      (0.068 * Math.pow(B, 2)));
  }
}