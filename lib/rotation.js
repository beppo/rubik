const { Position } = require('./position.js')

function minus(f) {
    return (t) => -f(t)
}

function zero(t) {
    return 0
}
function one(t) {
    return 1
}

const rx = [
    [one, zero, zero],
    [zero, Math.cos, minus(Math.sin)],
    [zero, Math.sin, Math.cos]
]

const ry = [
    [Math.cos, zero, Math.sin],
    [zero, one, zero],
    [minus(Math.sin), zero, Math.cos]
]

const rz = [
    [Math.cos, minus(Math.sin), zero],
    [Math.sin, Math.cos, zero],
    [zero, zero, one]
]

function _calc(p0, rm, j, t) {
    console.log(j, t, p0[0], rm[0][j](t), p0[1], rm[1][j](t), p0[2], rm[2][j](t))
    return p0[0] * rm[0][j](t) + p0[1] * rm[1][j](t) + p0[2] * rm[2][j](t)
}

function _multiplyMatrix(p0, rm, t) {
    return [
        _calc(p0, rm, 0, t),
        _calc(p0, rm, 1, t),
        _calc(p0, rm, 2, t)
    ]
}

function rotateX(position, t) {
    return position.fromArray(_multiplyMatrix(position.toArray(), rx, t))
}

function rotateY(position, t) {
    return position.fromArray(_multiplyMatrix(position.toArray(), ry, t))
}

function rotateZ(position, t) {
    return position.fromArray(_multiplyMatrix(position.toArray(), rz, t))
}
module.exports = { rotateX, rotateY, rotateZ }
