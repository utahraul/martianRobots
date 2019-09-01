var martianRobots = function (inputString) {
    processInput(inputString);
};

var processInput = function (inputString) {
    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    };
}

module.exports = martianRobots;