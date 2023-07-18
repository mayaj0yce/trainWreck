const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./shapes.js');

// Prompt the user for logo details
inquirer
  .prompt([
    {
      type: 'input',
      name: 'initials',
      message: 'Enter the initials (up to 3 characters):',
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter up to 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'txtColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select the shape:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color:',
    },
  ])
  .then((answers) => {
 

   
     const logoSvg = createLogo(answers.initials, answers.txtColor, answers.shape, answers.color);
    console.log(logoSvg);
    console.log(answers);
    fs.writeFile('logo.svg', logoSvg, (err) =>
    err ? console.log(err) : console.log('created.')
  );
  })
  .catch((error) => {
    console.log('An error occurred:', error);
  });



// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('logo.svg', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('created.')
//   );
// });
 //this should connect to shapes.js for the function. how do i call this and then push it?
    //can i do the test function as well (office hours)


    //fix the svg 
