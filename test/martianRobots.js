var chai = require('chai');
var expect = chai.expect;
var martianRobots = require('./../src/martianRobots.js');

describe('Given a new input ', function () {

    describe('with an empty string passed in ', function () {
        it('should throw an error', function () {
            expect(function () { martianRobots('') }).to.throw(Error, /empty/);
        });
    });

    describe('with an incorrect upper-right coordinates string passed in ', function () {
        it('should throw an error when x > 50', function () {
            expect(function () { martianRobots('51 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });

        it('should throw an error when x < 0', function () {
            expect(function () { martianRobots('-1 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });

        it('should throw an error when y > 50', function () {
            expect(function () { martianRobots('1 51\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });

        it('should throw an error when y < 0', function () {
            expect(function () { martianRobots('1 -1\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL') }).to.throw(Error, 'Incorrect upper-right coordinates');
        });
    });

    describe('with one robot and one movement data passed in ', function () {
        it('should return 2 1 E', function () {
            expect(martianRobots('5 5\n1 1 E\nF')).to.equal('2 1 E\n');
        });

        it('should return 1 1 S', function () {
            expect(martianRobots('5 5\n1 1 E\nR')).to.equal('1 1 S\n');
        });

        it('should return 1 1 N', function () {
            expect(martianRobots('5 5\n1 1 E\nL')).to.equal('1 1 N\n');
        });
    });

    describe('with one robot and some movements data passed in ', function () {
        it('should return 2 1 E', function () {
            expect(martianRobots('5 5\n1 1 N\nRF')).to.equal('2 1 E\n');
        });
    });

    describe('with one robot and some more movements data passed in ', function () {
        it('should return 1 3 N', function () {
            expect(martianRobots('5 5\n1 2 N\nLFLFLFLFF')).to.equal('1 3 N\n');
        });
    });

    describe('with one robot and some movements data passed in ', function () {
        it('should return 2 1 E', function () {
            expect(martianRobots('5 5\n1 1 N\nRF')).to.equal('2 1 E\n');
        });
    });

    describe('with one robot to be lost data passed in ', function () {
        it('should return 1 5 N LOST', function () {
            expect(martianRobots('5 5\n1 1 N\nFRLFFFF')).to.equal('1 5 N LOST\n');
        });
    });

    describe('with the three robots(one LOST) data passed in ', function () {
        it('should return the right output', function () {
            expect(martianRobots('5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 2 W\nLLFFFLFLFL')).to.equal('1 1 E\n3 3 N LOST\n2 3 S\n');
        });
    });
});
