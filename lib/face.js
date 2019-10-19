var { Sides } = require('./side')

function face(color, coordinates) {
    this.color = color
    this.coordinates = coordinates

    this.getSide = function () {
        let axis
        for (i in coordinates) {
            if (coordinates[i] != 0) {
                axis = {
                    index: i,
                    value: coordinates[i]
                }
            }
        }
        let side
        switch (axis.index) {
            case "0":
                side = axis.value == 1 ? Sides.LEFT : Sides.RIGHT
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
}

module.exports = { face }