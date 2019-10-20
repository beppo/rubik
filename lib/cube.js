const FaceFilter = {
    UP: (cube) => cube.coordinates[1] == 1,
    DOWN: (cube) => cube.coordinates[1] == -1,
    LEFT: (cube) => cube.coordinates[0] == 1,
    RIGHT: (cube) => cube.coordinates[0] == -1,
    FRONT: (cube) => cube.coordinates[2] == 1,
    BACK: (cube) => cube.coordinates[2] == -1
}

function cube(coordinates, faces) {
    this.faces = faces
    this.coordinates = coordinates
    this.getFace = function(side){
        return faces.find((face)=>{
            return face.getSide()==side
        })
    }
}

module.exports = { cube }