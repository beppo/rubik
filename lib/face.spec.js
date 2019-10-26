var assert = require('assert');
var { Face } = require('./face')
var { Color } = require('./color')
var { Side } = require('./side')
describe('Face', function () {
  describe('#getSide()', function () {
    [
      { side: Side.UP, coordinates: [0, 1, 0] },
      { side: Side.DOWN, coordinates: [0, -1, 0] },
      { side: Side.FRONT, coordinates: [0, 0, 1] },
      { side: Side.BACK, coordinates: [0, 0, -1] },
      { side: Side.RIGHT, coordinates: [1, 0, 0] },
      { side: Side.LEFT, coordinates: [-1, 0, 0] },
    ]
      .forEach(item => {
        it(`face with coordinates [${item.coordinates}] should have side '${item.side}'`, function () {
          const face = new Face(null, item.coordinates)
          assert.equal(face.getSide(), item.side);
        });
      });
  });
  describe('#rotateX()', function () {
    [
      { side: Side.BACK, coordinates: [0, 1, 0] },
      { side: Side.FRONT, coordinates: [0, -1, 0] },
      { side: Side.UP, coordinates: [0, 0, 1] },
      { side: Side.DOWN, coordinates: [0, 0, -1] },
      { side: Side.RIGHT, coordinates: [1, 0, 0] },
      { side: Side.LEFT, coordinates: [-1, 0, 0] },
    ]
      .forEach(item => {
        it(`face with coordinates [${item.coordinates}] should have side '${item.side}' after rotation around x axis by angle PI/2`, function () {
          const face = new Face(null, item.coordinates)
          face.rotateX(Math.PI/2)
          assert.equal(face.getSide(), item.side);
        });
      });
  });
  describe('#rotateY()', function () {
    [
      { side: Side.UP, coordinates: [0, 1, 0] },
      { side: Side.DOWN, coordinates: [0, -1, 0] },
      { side: Side.LEFT, coordinates: [0, 0, 1] },
      { side: Side.RIGHT, coordinates: [0, 0, -1] },
      { side: Side.FRONT, coordinates: [1, 0, 0] },
      { side: Side.BACK, coordinates: [-1, 0, 0] },
    ]
      .forEach(item => {
        it(`face with coordinates [${item.coordinates}] should have side '${item.side}' after rotation around y axis by angle PI/2`, function () {
          const face = new Face(null, item.coordinates)
          face.rotateY(Math.PI/2)
          assert.equal(face.getSide(), item.side);
        });
      });
  });
  describe('#rotateZ()', function () {
    [
      { side: Side.RIGHT, coordinates: [0, 1, 0] },
      { side: Side.LEFT, coordinates: [0, -1, 0] },
      { side: Side.FRONT, coordinates: [0, 0, 1] },
      { side: Side.BACK, coordinates: [0, 0, -1] },
      { side: Side.DOWN, coordinates: [1, 0, 0] },
      { side: Side.UP, coordinates: [-1, 0, 0] },
    ]
      .forEach(item => {
        it(`face with coordinates [${item.coordinates}] should have side '${item.side}' after rotation around z axis by angle PI/2`, function () {
          const face = new Face(null, item.coordinates)
          face.rotateZ(Math.PI/2)
          assert.equal(face.getSide(), item.side);
        });
      });
  });
});
