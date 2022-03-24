class DrawUtils {

    static #canvas;
    static #context;

    static initialization(canvas) {
        DrawUtils.#canvas = canvas;
        DrawUtils.#context = canvas.getContext("2d");
    }

    static clear() {
        let height = DrawUtils.#canvas.height;
        let width = DrawUtils.#canvas.width;
        DrawUtils.#context.clearRect(0, 0, width, height);
    }

    static getPointColor(point) {
        let x = point.getX();
        let y = point.getY();
        return DrawUtils.#context.getImageData(x, y, 1, 1).data;
    }

    static setBackground(color) {
        let height = DrawUtils.#canvas.height;
        let width = DrawUtils.#canvas.width;
        DrawUtils.#context.beginPath();
        DrawUtils.#context.rect(0, 0, width, height);
        DrawUtils.#context.fillStyle = color;
        DrawUtils.#context.fill();
    }

    static drawBlackPolygon(points) {
        DrawUtils.#context.beginPath();
        let x = points[0].getX();
        let y = points[0].getY();
        DrawUtils.#context.moveTo(x, y);
        points.forEach(point => {
            x = point.getX();
            y = point.getY();
            DrawUtils.#context.lineTo(x, y);
        });
        DrawUtils.#context.fillStyle = "#000000";
        DrawUtils.#context.fill();
    }

    static ifPixelIsBlackArray() {
        let height = DrawUtils.#canvas.height;
        let width = DrawUtils.#canvas.width;
        let data = DrawUtils.#context.getImageData(0, 0, width, height).data;
        let arr = [];
        arr.length = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0)
                arr[i / 4] = true;
            else
                arr[i / 4] = false;
        }
        return arr;
    }

    static getImageAsColorsArr() {
        let height = DrawUtils.#canvas.height;
        let width = DrawUtils.#canvas.width;
        let data = DrawUtils.#context.getImageData(0, 0, width, height).data;

        let res = [];
        res.length = width;
        for (let x = 0; x <= width; x++) {
            let line = [];
            line.length = height;
            for (let y = 0; y <= height; y++) {
                let i = (width * y + x) * 4;
                line[y] = [data[i], data[i + 1], data[i + 2]];
            }
            res[x] = line;
        }

        return res;
    }

    static drawPointWithRGB(point, R, G, B) {
        let hexR = this.#getHexFromDecimal(R);
        let hexG = this.#getHexFromDecimal(G);
        let hexB = this.#getHexFromDecimal(B);
        let color = "#" + hexR + hexG + hexB;
        this.drawPoint(point, color);
    }

    static drawPoint(point, color) {
        let x = point.getX();
        let y = point.getY();
        DrawUtils.#context.beginPath();
        DrawUtils.#context.rect(x, y, 1, 1);
        DrawUtils.#context.fillStyle = color;
        DrawUtils.#context.fill();
    }

    static #getHexFromDecimal(decimal) {
        let hex = Number(decimal).toString(16);
        if (hex.length < 2)
            hex = "0" + hex;
        return hex;
    }
}