const createLogo = require('./shapes');
//file path to the shapes for the testing 

// describe('circle', () => {
//     test('should create a circle svg', () => {
//         var expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><circle cx="100" cy="150" r="80" fill="blue"/><text x="100" y="180" text-anchor="middle" fill="yellow">hjs</text></svg>';
//         var circle = createLogo('hjs', 'yellow', 'circle', 'blue');

//         expect(expectedSvg).toEqual(circle);


//     })
// })



describe('square', () => {
    test('should create a square svg', () => {
        var expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><rect x="20" y="20" width="160" height="260" fill="blue"/><text x="100" y="180" text-anchor="middle" fill="yellow">hjk</text></svg>';
        var square = createLogo('hjk', 'yellow', 'square', 'blue');

        expect(expectedSvg).toEqual(square);


    })
})


// describe('triangle', () => {
//     test('should create a triangle svg', () => {
//         var expectedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300"><polygon points="100,20 180,280 20,280" fill="orange"/><text x="100" y="150" text-anchor="center" fill="yellow">hjs</text></svg>';
//         var triangle = createLogo('hjs', 'yellow', 'triangle', 'orange');

//         expect(expectedSvg).toEqual(triangle);


//     })
// })

