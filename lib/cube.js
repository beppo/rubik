var { face } = require('./face')

function cube(position, faces) {
    this.inialPosition = position
    this.faces = faces
    this.position = position
    function getFace(side = UP) {
        // inial position x=2,y=2,z=2
        // position       x=2,y=2,z=0
    }
}



function createCube(x, y, z) {
    let faces = []
    return new cube(new position(x, y, z), faces)
}

module.exports = { cube, position }