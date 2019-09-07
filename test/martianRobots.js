var chai = require('chai');
var expect = chai.expect;
var martianRobots = require('./../src/martianRobots.js');

describe('Given a new input ', function () {

    describe('with an empty string passed in ', function () {
        it('should throw and error', function () {
            expect(function () { martianRobots('') }).to.throw(Error, /empty/);
        });
    });

    describe('with an incorrect upper-right coordinates string passed in ', function () {
        it('should throw and error when x > 50', function () {
            expect(function () { martianRobots('51 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });

        it('should throw and error when x < 0', function () {
            expect(function () { martianRobots('-1 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });

        it('should throw and error when y > 50', function () {
            expect(function () { martianRobots('1 51\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });

        it('should throw and error when y < 0', function () {
            expect(function () { martianRobots('1 -1\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });
    });
});
