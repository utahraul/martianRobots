var chai = require('chai');
var expect = chai.expect;
var martianRobots = require('./../src/martianRobots.js');

describe('Given a new input', function () {

    it('with an empty string passed in', function() {
        expect (function() {martianRobots('')}).to.throw(Error,  /empty/);
      });
});
