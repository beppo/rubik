var assert = require('assert');
var { rotateX, rotateY, rotateZ } = require('./rotation.js')

describe('Rotation', function () {
  describe('#rotateX()', function () {
    [
      params(Math.PI / 2.0, [1, 1, 1], [1, 1, -1]),
      params(-Math.PI / 2.0, [1, 1, 1], [1, -1, 1]),
      params(Math.PI / 2.0, [0, 1, 0], [0, 0, -1]),
      params(-Math.PI / 2.0, [0, 1, 0], [0, 0, 1]),
      params(Math.PI / 2.0, [0, 1, -1], [0, -1, -1]),
      params(-Math.PI / 2.0, [0, 1, -1], [0, 1, 1]),
    ].forEach(item => {
      it(`rotating ${item.coordinates} by angle ${item.angle} should return ${item.expected}`, function () {
        assert.deepEqual(item.expected, rotateX(item.coordinates, item.angle).map((n) => Math.round(n)));
      });
    });
  });
  describe('#rotateY()', function () {
    [
      params(Math.PI / 2.0, [1, 1, 1], [-1, 1, 1]),
      params(-Math.PI / 2.0, [1, 1, 1], [1, 1, -1]),
      params(Math.PI / 2.0, [0, 1, 0], [0, 1, 0]),
      params(-Math.PI / 2.0, [0, 1, 0], [0, 1, 0]),
      params(Math.PI / 2.0, [0, 1, -1], [1, 1, 0]),
      params(-Math.PI / 2.0, [0, 1, -1], [-1, 1, 0]),
    ].forEach(item => {
      it(`rotating ${item.coordinates} by angle ${item.angle} should return ${item.expected}`, function () {
        assert.deepEqual(item.expected, rotateY(new Position(...item.coordinates), item.angle).toArray().map((n) => Math.round(n)));
      });
    });
  });
  describe('#rotateZ()', function () {
    [
      params(Math.PI / 2.0, [1, 1, 1], [1, -1, 1]),
      params(-Math.PI / 2.0, [1, 1, 1], [-1, 1, 1]),
      params(Math.PI / 2.0, [0, 1, 0], [1, 0, 0]),
      params(-Math.PI / 2.0, [0, 1, 0], [-1, 0, 0]),
      params(Math.PI / 2.0, [0, 1, -1], [1, 0, -1]),
      params(-Math.PI / 2.0, [0, 1, -1], [-1, 0, -1]),
    ].forEach(item => {
      it(`rotating ${item.coordinates} by angle ${item.angle} should return ${item.expected}`, function () {
        assert.deepEqual(item.expected, rotateZ(item.coordinates, item.angle).map((n) => Math.round(n)));
      });
    });
  });
});

function params(angle, coordinates, expected) {
  return {
    angle: angle,
    coordinates: coordinates,
    expected: expected
  }
}