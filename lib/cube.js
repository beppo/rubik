var { rotateX, rotateY, rotateZ } = require('./rotation')
const FaceFilter = {
    UP: (face) => face.coordinates[1] == 1,
    DOWN: (face) => face.coordinates[1] == -1,
    LEFT: (face) => face.coordinates[0] == 1,
    RIGHT: (face) => face.coordinates[0] == -1,
    FRONT: (face) => face.coordinates[2] == 1,
    BACK: (face) => face.coordinates[2] == -1
}

function Cube(coordinates, faces) {
    this.faces = faces
    this.coordinates = coordinates
    this.getFace = function (side) {
        return faces.find(FaceFilter[side])
    }
    this.rotateX = function (angle) {
        this.coordinates = rotateX(this.coordinates, angle)
        for (face of this.faces) {
            face.rotateX(angle)
        }
    }
    this.rotateY = function (angle) {
        this.coordinates = rotateY(this.coordinates, angle)
        for (face of this.faces) {
            face.rotateY(angle)
        }
    }
    this.rotateZ = function (angle) {
        this.coordinates = rotateZ(this.coordinates, angle)
        for (face of this.faces) {
            face.rotateZ(angle)
        }
    }
}

module.exports = { Cube }