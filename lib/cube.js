var { rotateX, rotateY, rotateZ } = require('./rotation')

const FaceFilter = {
    UP: (face) => face.coordinates[1] == 1,
    DOWN: (face) => face.coordinates[1] == -1,
    LEFT: (face) => face.coordinates[0] == 1,
    RIGHT: (face) => face.coordinates[0] == -1,
    FRONT: (face) => face.coordinates[2] == 1,
    BACK: (face) => face.coordinates[2] == -1
}

class Cube {
    constructor(coordinates, faces) {
        this.faces = faces
        this.coordinates = coordinates
    }

    getFace(side) {
        return this.faces.find(FaceFilter[side])
    }

    rotateX(angle) {
        this.coordinates = rotateX(this.coordinates, angle)
        for (const face of this.faces) {
            face.rotateX(angle)
        }
    }

    rotateY(angle) {
        this.coordinates = rotateY(this.coordinates, angle)
        for (const face of this.faces) {
            face.rotateY(angle)
        }
    }

    rotateZ(angle) {
        this.coordinates = rotateZ(this.coordinates, angle)
        for (const face of this.faces) {
            face.rotateZ(angle)
        }
    }

    toString() {
        let result = `Cube: [${this.coordinates}], ${this.color}, [`
        for (const face of this.faces) {
            result += face.toString()
        }
        result += ']'
        return result
    }
}

module.exports = { Cube }