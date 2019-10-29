var { Side } = require('./side')
var { rotateX, rotateY, rotateZ } = require('./rotation')

function Face(color, coordinates) {
    this.color = color
    this.coordinates = coordinates

    this.getSide = function () {
        let axis
        const coordinates = this.coordinates
        for (i in coordinates) {
            if (Math.abs(coordinates[i]) != 0) {
                axis = {
                    index: i,
                    value: coordinates[i]
                }
            }
        }
        let side
        switch (axis.index) {
            case "0":
                side = axis.value == 1 ? Side.RIGHT : Side.LEFT
                break;
            case "1":
                side = axis.value == 1 ? Side.UP : Side.DOWN
                break;
            case "2":
                side = axis.value == 1 ? Side.FRONT : Side.BACK
                break;
            default:
                throw `Unknown side index ${axis.index}`
        }
        return side
    }

    this.rotateX = function (angle) {
        this.coordinates = rotateX(this.coordinates, angle)
    }
    this.rotateY = function (angle) {
        this.coordinates = rotateY(this.coordinates, angle)
    }
    this.rotateZ = function (angle) {
        this.coordinates = rotateZ(this.coordinates, angle)
    }
}

Face.prototype.toString = function (){
    return `Face: [${this.coordinates}], ${this.color}`
}

module.exports = { Face }