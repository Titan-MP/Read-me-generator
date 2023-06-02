const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Does your project require any installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use your project?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any required tests?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'what license does your project have?', 
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
];

module.exports = questions;