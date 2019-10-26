function negate(f) {
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
    [zero, Math.cos, negate(Math.sin)],
    [zero, Math.sin, Math.cos]
]

const ry = [
    [Math.cos, zero, Math.sin],
    [zero, one, zero],
    [negate(Math.sin), zero, Math.cos]
]

const rz = [
    [Math.cos, negate(Math.sin), zero],
    [Math.sin, Math.cos, zero],
    [zero, zero, one]
]

function _calc(p0, rm, j, t) {
    return Math.round(p0[0] * rm[0][j](t) + p0[1] * rm[1][j](t) + p0[2] * rm[2][j](t))
}

function _multiplyMatrix(p0, rm, t) {
    return [
        _calc(p0, rm, 0, t),
        _calc(p0, rm, 1, t),
        _calc(p0, rm, 2, t)
    ]
}

function rotateX(coordinates, t) {
    return _multiplyMatrix(coordinates, rx, t)
}

function rotateY(coordinates, t) {
    return _multiplyMatrix(coordinates, ry, t)
}

function rotateZ(coordinates, t) {
    return _multiplyMatrix(coordinates, rz, t)
}
module.exports = { rotateX, rotateY, rotateZ }
