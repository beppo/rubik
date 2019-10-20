var { cube } = require('./cube')
var { face } = require('./face')
var { Sides } = require('./side')
var { Color } = require('./color')

const SideFilter = {
    UP: (cube) => cube.coordinates[1] == 1,
    DOWN: (cube) => cube.coordinates[1] == -1,
    LEFT: (cube) => cube.coordinates[0] == 1,
    RIGHT: (cube) => cube.coordinates[0] == -1,
    FRONT: (cube) => cube.coordinates[2] == 1,
    BACK: (cube) => cube.coordinates[2] == -1
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
const rubik = createRubik()
for (side in Sides) {
    let cubes = getSide(side);
    let color = getColor(side)
    for (cube of cubes) {
        cube.getFace(side).color = color
    }
}

function getSide(side) {
    return rubik.filter(SideFilter[side])
}

function createRubik() {
    let cubes = []
    const coordinates = [-1, 0, 1]
    for (x of coordinates) {
        for (y of coordinates) {
            for (z of coordinates) {
                console.log(x, y, z)
                cubes.push(new cube([x, y, z], createFaces()))
            }
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

module.exports = {
    getSide
}