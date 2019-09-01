var chai = require('chai');
var expect = chai.expect;
var martianRobots = require('./../src/martianRobots.js');

describe('Given a new input', function () {

    it('with an empty string passed in', function () {
        expect(function () { martianRobots('') }).to.throw(Error, /empty/);
    });

    it('with the right data passed in', function () {
        expect(martianRobots('5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL')).to.equal('1 1 E\n3 3 N LOST\n2 3 S');
    });
});
