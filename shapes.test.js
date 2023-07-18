const createLogo = require('./shapes');
//file path to the shapes for the testing 

describe('circle', () => {
    test('should create a circle svg', () => {
        var expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><circle cx="100" cy="150" r="80" fill="blue"/><text x="100" y="180" text-anchor="middle" fill="yellow">hjs</text></svg>';
        var circle = createLogo('hjs', 'yellow', 'circle', 'blue');

        expect(expectedSvg).toEqual(circle);


    })
})

