var { Cube } = require('./cube')
var { Face } = require('./face')
var { Side } = require('./side')
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
        case Side.UP:
            return Color.BLUE
        case Side.DOWN:
            return Color.GREEN
        case Side.LEFT:
            return Color.ORANGE
        case Side.RIGHT:
            return Color.RED
        case Side.FRONT:
            return Color.WHITE
        case Side.BACK:
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
    for (side in Side) {
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
        new Face(null, [1, 0, 0]),
        new Face(null, [-1, 0, 0]),
        new Face(null, [0, 1, 0]),
        new Face(null, [0, -1, 0]),
        new Face(null, [0, 0, 1]),
        new Face(null, [0, 0, -1])
    ]
}

class Rubik {
    constructor() {
        this.cubes = createRubik()
    }
    rotateX(index, angle) {
        const cubes = this.getCubes(0, index)
        for (const cube of cubes) {
            cube.rotateX(angle)
        }
        return cubes
    }

    rotateY(index, angle) {
        const cubes = this.getCubes(1, index)
        for (const cube of cubes) {
            cube.rotateY(angle)
        }
        return cubes
    }

    rotateZ(index, angle) {
        const cubes = this.getCubes(2, index)
        for (const cube of cubes) {
            cube.rotateZ(angle)
        }
        return cubes
    }

    getCubes(axis, index) {
        return this.cubes.filter(cube => cube.coordinates[axis] == index)
    }

    getSide(side) {
        return _getSide(side, this.cubes)
    }

    toString() {
        let result = ''
        for (const side in Side) {
            let cubes = this.getSide(side)
            for (let i = 0; i < 2; i++) {
                let filtered = cubes.filter(cube => cube.coordinates[i] == cubes[0].coordinates[i])
                if (filtered.length != 9) {
                    for (let j of [-1, 0, 1]) {
                        result += cubes.filter(cube => cube.coordinates[i] == j).map(c => c.getFace(side).color).join(" ") + "\n"
                    }
                    break
                }
            }
        }
        return result
    }
}

module.exports = {
    Rubik
}