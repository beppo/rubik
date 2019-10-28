var { Cube } = require('./cube')
var { Face: face } = require('./face')
var { Side: Sides } = require('./side')
var { Color } = require('./color')

const SideFilter = {
    UP: (cube) => cube.coordinates[1] == 1,
    DOWN: (cube) => cube.coordinates[1] == -1,
    LEFT: (cube) => cube.coordinates[0] == 1,
    RIGHT: (cube) => cube.coordinates[0] == -1,
    FRONT: (cube) => cube.coordinates[2] == 1,
    BACK: (cube) => cube.coordinates[2] == -1
}


function _getSide(side, cubes) {
    return cubes.filter(SideFilter[side])
}

function getColor(side) {
    switch (side) {
        case Sides.UP:
            return Color.BLUE
        case Sides.DOWN:
            return Color.GREEN
        case Sides.LEFT:
            return Color.ORANGE
        case Sides.RIGHT:
            return Color.RED
        case Sides.FRONT:
            return Color.WHITE
        case Sides.BACK:
            return Color.YELLOW
        default:
            throw `Unknown side ${side}`
    }
}


function createRubik() {
    let cubes = []
    const coordinates = [-1, 0, 1]
    for (x of coordinates) {
        for (y of coordinates) {
            for (z of coordinates) {
                if (x == 0 && y == 0 && z == 0) {
                    continue
                }
                cubes.push(new Cube([x, y, z], createFaces()))
            }
        }
    }
    for (side in Sides) {
        let sideCubes = _getSide(side, cubes);
        let color = getColor(side)
        for (cube of sideCubes) {
            cube.getFace(side).color = color
        }
    }
    return cubes
}

function createFaces() {
    return [
        new face(null, [1, 0, 0]),
        new face(null, [-1, 0, 0]),
        new face(null, [0, 1, 0]),
        new face(null, [0, -1, 0]),
        new face(null, [0, 0, 1]),
        new face(null, [0, 0, -1])
    ]
}

function Rubik() {
    this.cubes = createRubik()

    this.rotateX = function (index, angle) {
        const cubes = this.getCubes(0, index)
        for (const cube of cubes) {
            cube.rotateX(angle)
        }
        return cubes
    }

    this.rotateY = function (index, angle) {
        const cubes = this.getCubes(1, index)
        for (const cube of cubes) {
            cube.rotateY(angle)
        }
        return cubes
    }

    this.rotateZ = function (index, angle) {
        const cubes = this.getCubes(2, index)
        for (const cube of cubes) {
            cube.rotateZ(angle)
        }
        return cubes
    }

    this.getCubes = function (axis, index, r) {
        return this.cubes.filter(cube => cube.coordinates[axis] == index)
    }

    this.getSide = function (side) {
        return _getSide(side, this.cubes)
    }

}
module.exports = {
    Rubik
}