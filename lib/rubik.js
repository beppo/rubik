var { cube } = require('./cube')
var { Position } = require('./position')
var { face } = require('./face')
const Sides = {
    UP: (cube) => cube.position.y == 1,
    DOWN: (cube) => cube.position.y == -1,
    LEFT: (cube) => cube.position.x == 1,
    RIGHT: (cube) => cube.position.x == -1,
    FRONT: (cube) => cube.position.z == 1,
    BACK: (cube) => cube.position.z == -1
}

const rubik = createRubik()

function getSide(side) {
    return rubik.filter(side)
}

function createRubik() {
    let cubes = []
    for (x = 0; x <= 1; x++) {
        for (y = 0; y <= 1; y++) {
            for (z = 0; z <= 1; z++) {
                cubes.push(new cube(new Position(x, y, z), createFaces()))
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
        new face(null, [0, 0, -1]),
        new face(null, [0, 0, -1])
    ]
}

module.exports = {
    Sides,
    getSide
}