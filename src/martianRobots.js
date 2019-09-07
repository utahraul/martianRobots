let output;
let gridMaxWidth;
let gridMaxHeight;

var martianRobots = function (inputString) {
    return (processInput(inputString));
};

var processInput = function (inputString) {
    if (inputString === '') {
        throw new Error('Input string cannot be empty');
    }
    else {
        const martianRobotsData = inputString.split("\n");
        const marsSize = martianRobotsData[0].split(" ");
        gridMaxWidth = marsSize[0];
        gridMaxHeight = marsSize[1];

        verifyMarsSize(gridMaxWidth, gridMaxHeight);

        for (i = 1; i < martianRobotsData.length; i = i + 2) {
            var robotInitialPositionAndOrientation = setRobotInitialPositionAndOrientation(martianRobotsData[i]);
            processRobotMovements(robotInitialPositionAndOrientation, martianRobotsData[i + 1]);
        };
    }
}

var verifyMarsSize = function (gridMaxWidth, gridMaxHeight) {
    if (gridMaxWidth > 50 || gridMaxWidth < 0 || gridMaxHeight > 50 || gridMaxHeight < 0) {
        throw new Error('Incorrect upper-right coordinates');
    }
    else {
        return ('1 1 E\n3 3 N LOST\n2 3 S');
    }
}

var setRobotInitialPositionAndOrientation = function (positionAndOrientation) {
    let x = positionAndOrientation.split(' ')[0];
    let y = positionAndOrientation.split(' ')[1];
    let orientation = positionAndOrientation.split(' ')[2];
    return {
        "x": x,
        "y": y,
        "orientation": orientation
    };
}

var processRobotMovements = function (robotInitialPositionAndOrientation, robotMovements) {
    console.log(robotInitialPositionAndOrientation);
    console.log(robotMovements);

    for (var i = 0; i < robotMovements.length; i++) {
        let moveToDo = robotMovements.charAt(i);
        console.log(moveToDo);
    }

}

module.exports = martianRobots;