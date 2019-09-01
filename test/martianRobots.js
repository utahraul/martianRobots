var chai = require('chai');
var expect = chai.expect;
var martianRobots = require('./../src/martianRobots.js');

describe('Given a new input', function () {

    it('with an empty string passed in', function () {
        expect(function () { martianRobots('') }).to.throw(Error, /empty/);
    });

    it('with an incorrect upper-right coordinates string passed in. x > 50', function () {
        expect(function () { martianRobots('51 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
    });

    it('with an incorrect upper-right coordinates string passed in. x < 0', function () {
        expect(function () { martianRobots('-1 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
    });

    it('with an incorrect upper-right coordinates string passed in. y > 50', function () {
        expect(function () { martianRobots('1 51\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
    });

    it('with an incorrect upper-right coordinates string passed in. y < 0', function () {
        expect(function () { martianRobots('1 -1\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
    });

    it('with the right data passed in', function () {
        expect(martianRobots('5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL')).to.equal('1 1 E\n3 3 N LOST\n2 3 S');
    });
});
