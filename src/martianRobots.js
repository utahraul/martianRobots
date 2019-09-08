var verifyMarsSize = require('./../src/verifyMarsSize.js');

var martianRobots = function (inputString) {
    return (processInput(inputString));
};

var processInput = function (inputString) {

    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    }

    const martianRobotsData = inputString.split("\n");
    const marsSize = martianRobotsData[0].split(" ");
    verifyMarsSize(marsSize);

    var output = "";

    for (let i = 1; i < martianRobotsData.length; i = i + 2) {
        var robotInitialPositionAndOrientation = parseInitialPosition(martianRobotsData[i]);
        output += processRobotMovements(robotInitialPositionAndOrientation, martianRobotsData[i + 1]) + "\n";
    }
    return output;
}

var parseInitialPosition = function (positionAndOrientation) {

    let instructions = positionAndOrientation.split(' ');
    let x = parseInt(instructions[0]);
    let y = parseInt(instructions[1]);
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
        if (movementToDo === 'L') robotInitialPositionAndOrientation = turnLeft(robotInitialPositionAndOrientation);
        if (movementToDo === 'R') robotInitialPositionAndOrientation = turnRight(robotInitialPositionAndOrientation);
        if (movementToDo === 'F') robotInitialPositionAndOrientation = moveForward(robotInitialPositionAndOrientation);
    }
    let finalPosition = robotInitialPositionAndOrientation.x + ' ' + robotInitialPositionAndOrientation.y + ' ' + robotInitialPositionAndOrientation.orientation;
    return (finalPosition);
};

function moveForward(currentPosition) {
    let x = currentPosition.x;
    let y = currentPosition.y;
    let orientation = currentPosition.orientation;

    if (orientation === 'N') {y = y + 1;}
    else if (orientation === 'W') {x = x - 1;}
    else if (orientation === 'S') {y = y - 1;}
    else {x = x + 1;}

    let newPosition = {
        x: x,
        y: y,
        orientation: orientation
    };
    return newPosition;
}

function turnRight(currentPosition) {
    let x = currentPosition.x;
    let y = currentPosition.y;
    let orientation = currentPosition.orientation;

    if (orientation === 'N') { orientation = 'E'; }
    else if (orientation === 'W') { orientation = 'N'; }
    else if (orientation === 'S') { orientation = 'W'; }
    else { orientation = 'S'; }

    let newPosition = {
        x: x,
        y: y,
        orientation: orientation
    };
    return newPosition;
}

function turnLeft(currentPosition) {
    let x = currentPosition.x;
    let y = currentPosition.y;
    let orientation = currentPosition.orientation;

    if (orientation === 'N') { orientation = 'W'; }
    else if (orientation === 'W') { orientation = 'S'; }
    else if (orientation === 'S') { orientation = 'E'; }
    else { orientation = 'N'; }

    let newPosition = {
        x: x,
        y: y,
        orientation: orientation
    };
    return newPosition;
}

module.exports = martianRobots;