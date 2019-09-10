var verifyMarsSize = require('./../src/verifyMarsSize.js');
var gridMaxWidth;
var gridMaxHeight;

function martianRobots (inputString) {
    return (processInput(inputString));
}

function processInput (inputString) {

    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    }

    const martianRobotsData = inputString.split("\n");
    const marsSize = martianRobotsData[0].split(" ");
    gridMaxWidth = parseInt(marsSize[0]);
    gridMaxHeight = parseInt(marsSize[1]);

    verifyMarsSize(gridMaxWidth, gridMaxHeight);

    var output = "";

    for (let i = 1; i < martianRobotsData.length; i = i + 2) {
        var robotInitialPositionAndOrientation = parseInitialPosition(martianRobotsData[i]);
        output += processRobotMovements(robotInitialPositionAndOrientation, martianRobotsData[i + 1]) + "\n";
    }
    return output;
}

function parseInitialPosition (positionAndOrientation) {

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

var isLost = false;

function processRobotMovements (robotInitialPositionAndOrientation, robotMovements) {

    isLost = false;

    for (let i = 0; i < robotMovements.length && !isLost; i++) {
        let movementToDo = robotMovements.charAt(i);
        if (movementToDo === 'L') robotInitialPositionAndOrientation = turnLeft(robotInitialPositionAndOrientation);
        if (movementToDo === 'R') robotInitialPositionAndOrientation = turnRight(robotInitialPositionAndOrientation);
        if (movementToDo === 'F') robotInitialPositionAndOrientation = moveForward(robotInitialPositionAndOrientation);
    }
    return (robotInitialPositionAndOrientation.x + ' ' + robotInitialPositionAndOrientation.y + ' ' + robotInitialPositionAndOrientation.orientation);
}

function moveForward(currentPosition) {
    let x = currentPosition.x;
    let y = currentPosition.y;
    let orientation = currentPosition.orientation;

    if (orientation === 'N') { y = y + 1; }
    else if (orientation === 'W') { x = x - 1; }
    else if (orientation === 'S') { y = y - 1; }
    else { x = x + 1; }

    return (verifyIfRobotIsLost(x, y, orientation));
}

function turnRight(currentPosition) {
    let x = currentPosition.x;
    let y = currentPosition.y;
    let orientation = currentPosition.orientation;

    if (orientation === 'N') { orientation = 'E'; }
    else if (orientation === 'W') { orientation = 'N'; }
    else if (orientation === 'S') { orientation = 'W'; }
    else { orientation = 'S'; }

    return {
        x: x,
        y: y,
        orientation: orientation
    };
}

function turnLeft(currentPosition) {
    let x = currentPosition.x;
    let y = currentPosition.y;
    let orientation = currentPosition.orientation;

    if (orientation === 'N') { orientation = 'W'; }
    else if (orientation === 'W') { orientation = 'S'; }
    else if (orientation === 'S') { orientation = 'E'; }
    else { orientation = 'N'; }

    return {
        x: x,
        y: y,
        orientation: orientation
    };
}

function verifyIfRobotIsLost(x, y, orientation) {
    if (x > gridMaxWidth) {
        isLost = true;
        return {
            x: gridMaxWidth,
            y: y,
            orientation: orientation + " LOST"
        };
    }
    if (x < 0) {
        isLost = true;
        return {
            x: 0,
            y: y,
            orientation: orientation + " LOST"
        };
    }
    if (y > gridMaxHeight) {
        isLost = true;
        return {
            x: x,
            y: gridMaxHeight,
            orientation: orientation + " LOST"
        };
    }
    if (y < 0) {
        isLost = true;
        return {
            x: x,
            y: 0,
            orientation: orientation + " LOST"
        };
    }
    isLost = false;
    return {
        x: x,
        y: y,
        orientation: orientation
    };
}

module.exports = martianRobots;
