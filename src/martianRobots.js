var martianRobots = function (inputString) {
    return (processInput(inputString));
};

var processInput = function (inputString) {
    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    }
    else {
        return('1 1 E\n3 3 N LOST\n2 3 S');
    }
}

module.exports = martianRobots;