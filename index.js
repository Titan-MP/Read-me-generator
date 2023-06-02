const { prompt } = require('inquirer');
const { questions, genMD } = require('./lib');

prompt(questions).then(genMD);