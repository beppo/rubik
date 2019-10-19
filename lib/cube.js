const FaceFilter = {
    UP: (cube) => cube.position.y == 1,
    DOWN: (cube) => cube.position.y == -1,
    LEFT: (cube) => cube.position.x == 1,
    RIGHT: (cube) => cube.position.x == -1,
    FRONT: (cube) => cube.position.z == 1,
    BACK: (cube) => cube.position.z == -1
}

function cube(position, faces) {
    this.faces = faces
    this.position = position
    this.getFace = function(side){
        return faces.find((face)=>{
            return face.getSide()==side
        })
    }
}

module.exports = { cube }