var martianRobots = require('./../src/martianRobots.js');

var exampleData = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 2 W\nLLFFFLFLFL';

let result = martianRobots(exampleData);
console.log('Input: \n' + exampleData + '\n\n' + 'Output:\n' + result);
