var { Side: Sides } = require('./side')
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
                side = axis.value == 1 ? Sides.RIGHT : Sides.LEFT
                break;
            case "1":
                side = axis.value == 1 ? Sides.UP : Sides.DOWN
                break;
            case "2":
                side = axis.value == 1 ? Sides.FRONT : Sides.BACK
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

module.exports = { Face }