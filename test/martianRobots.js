var chai = require('chai');
var expect = chai.expect;
var martianRobots = require('./../src/martianRobots.js');

describe('martianRobots', function () {
    it('true is true', function () {
        expect(true).to.equal(true);
    });

    it('martianRobots() should return error if no input string is passed in', function() {
        var martianRobotsNoInputString = martianRobots();
        expect(martianRobotsNoInputString).to.have.string("Error");
      });
});
