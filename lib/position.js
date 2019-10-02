function Position(x, y, z) {
    this.x = x
    this.y = y
    this.z = z

    this.toArray = function () {
        return [this.x, this.y, this.z]
    }

    this.fromArray = function (arg) {
        return new Position(...arg)
    }
}

module.exports = { Position }