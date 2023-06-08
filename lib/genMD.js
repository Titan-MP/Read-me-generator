const { writeFile } = require('fs');

const genMD = data => {

 let output = `
 # ${data.title}
 ${data.licenses == 'None' ? '' : `![badmath](https://img.shields.io/badge/License-${data.licenses}-blue)`}
 
 ## Description
 ${data.description}
 
 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributors](#contributors)
 - [License](#license)
 - [Tests](#tests)
 
 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}
 
 ## Contributors
 ${data.contributors}
 
 ## License
 ${data.licenses}
 
 ## Tests
 ${data.tests}

## Questions
If you have any questions, please contact me at [email](mailto:${data.email}) or visit my github at [github](https://github.com/${data.github}).
 
 
 `;

    writeFile('dist/README.md', output, err => {
        if (err) {
            console.log(err);
        }
        console.log('README.md generated!');
    });
};


module.exports = genMD;