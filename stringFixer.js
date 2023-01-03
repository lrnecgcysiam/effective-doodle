// Fixes a string used for tags in a video 
// to use for a filename


const fs = require("fs");
const content = fs.readFileSync("tagContent.txt");

// Reading Content....
setTimeout(function() {
    console.log(`Buffer to String: `,content.toString());
}, 1000);

// replace commas with empty string
var replacedComma = content.toString().split(',').join('');
setTimeout(function() {
    console.log(`replacing  comma with empty string: `,replacedComma);
}, 2000);

// WAIT 3 seconds replaces empty string with .
var replacedSpace = replacedComma.split(' ').join('.');
setTimeout(function() {
    console.log(`replacing  spaces with dots: `,replacedSpace);
}, 3000);

var removeExclamationPoint = replacedSpace.split('!').join('');
setTimeout(function() {
    console.log(`remove exclamation point : `,removeExclamationPoint);
}, 3000);


// We can add another function that replaces the filename with the 
// new string we built



