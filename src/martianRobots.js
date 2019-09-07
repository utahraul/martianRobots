let gridMaxWidth;
let gridMaxHeight;

var martianRobots = function (inputString) {
    return (processInput(inputString));
};

var processInput = function (inputString) {
    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    }

    const martianRobotsData = inputString.split("\n");
    const marsSize = martianRobotsData[0].split(" ");
    gridMaxWidth = marsSize[0];
    gridMaxHeight = marsSize[1];

    verifyMarsSize(gridMaxWidth, gridMaxHeight);

    var output = "";
    for (i = 1; i < martianRobotsData.length; i = i + 2) {
        var robotInitialPositionAndOrientation = parseInitialPosition(martianRobotsData[i]);
        output += processRobotMovements(robotInitialPositionAndOrientation, martianRobotsData[i + 1]) + "\n";
    };
    return output;

}

var verifyMarsSize = function (gridMaxWidth, gridMaxHeight) {
    if (gridMaxWidth > 50 || gridMaxWidth < 0 || gridMaxHeight > 50 || gridMaxHeight < 0) {
        throw new Error('Incorrect upper-right coordinates');
    }
    return;
}

var parseInitialPosition = function (positionAndOrientation) {

    let instructions = positionAndOrientation.split(' ');
    let x = instructions[0];
    let y = instructions[1];
    let orientation = instructions[2];

    return {
        "x": x,
        "y": y,
        "orientation": orientation
    };
}

var processRobotMovements = function (robotInitialPositionAndOrientation, robotMovements) {

    for (let i = 0; i < robotMovements.length; i++) {
        let movementToDo = robotMovements.charAt(i);
        console.log(movementToDo);
    }

}

module.exports = martianRobots;