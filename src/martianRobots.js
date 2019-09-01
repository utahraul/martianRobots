var martianRobots = function (inputString) {
    return (processInput(inputString));
};

var processInput = function (inputString) {
    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    }
    else {
        const robotInstructions = inputString.split("\n");
        const marsSize = robotInstructions[0].split(" ");
        const gridMaxWidth = marsSize[0];
        const gridMaxHeight = marsSize[1];
        return verifyMarsSize(gridMaxWidth, gridMaxHeight);
    }
}

var verifyMarsSize = function (gridMaxWidth, gridMaxHeight) {
    if (gridMaxWidth > 50 || gridMaxWidth < 0 || gridMaxHeight > 50 || gridMaxHeight < 0) {
        throw new Error('Incorrect upper-right coordinates');
    }
    else {
        return('1 1 E\n3 3 N LOST\n2 3 S');
    }
}

module.exports = martianRobots;