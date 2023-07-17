const fs = require('fs');
const createLogo = require('/shapes');
//file path to the shapes for the testing 

describe('Logo Creator', () => {
  beforeEach(() => {
    if (fs.existsSync('logo.svg')) {
      fs.unlinkSync('logo.svg');
    }
  });

  createLogo('creates a logo and saves it as an SVG file', () => {
  //  ();

    expect(fs.existsSync('logo.svg')).toBe(true);

    const svgContent = fs.readFileSync('logo.svg', 'utf-8');

    expect(svgContent).toContain('<circle cx="100" cy="100" r="90" fill="white" />');
    expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100">AB</text>');
  });
});

describe();


//add one or the other ^ 

// const inquirer = require('inquirer');
// const createLogo = require('./index');

// jest.mock('inquirer');

// test('createLogo function should generate the correct SVG logo', () => {
//   const answers = {
//     initials: 'ABC',
//     txtColor: 'red',
//     shape: 'circle',
//     color: 'blue',
//   };

//   // Call the createLogo function with the provided answers
//   const logoSvg = createLogo(answers.initials, answers.txtColor, answers.shape, answers.color);

//   // Add assertions to validate the generated SVG logo
//   expect(logoSvg).toBeDefined();
//   // Add more assertions as needed
// });
