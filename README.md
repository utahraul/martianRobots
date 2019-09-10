# Martian Robots

## [Travis build history](https://travis-ci.org/utahraul/martianRobots/builds)

## [SonarCloud analysis](https://sonarcloud.io/organizations/utahraul/projects)

## The Problem
The original enunciate for the exercise can be found in [EXERCISE.md](EXERCISE.md).

## Instructions

### Requirements

[Node.js](https://nodejs.org/) version > v8.12.0 needs to be installed. 

### Installation

* Clone this repository locally, or download it zipped and then unzip it.
* From a command line, in the martianRobots path, execute the command ```'npm install'```

### Running the tests

From a command line, in the martianRobots path, execute the command ```'npm test'```

### Running the example

From a command line, in the \martianRobots\example path, execute the command ```'node example.js'```

The input data can be modified by manually editing the file ```'\martianRobots\example\example.js'```and changing the string in ```'exampleData'``` (Line 3) for the desired data.

## Strategy / Decisions

Not all the possible wrong inputs have been treated.

“Scent” feature that prohibits future robots from dropping off the world at the same grid point that a previous robot has dropped off has not been developed yet.
