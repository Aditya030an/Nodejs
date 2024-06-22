//just add and sub
var fs = require('fs');
var a=6;
var b = 2;
//1 create cal file in which add and sub function are there
fs.writeFile('cal.js', 'exports.add = function add(a, b) { return a + b; }; exports.sub = function sub(a, b) { return a - b; };', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Cal file is added");

        // 2. Read the value and use the module
        var cal = require('./cal.js');
        console.log("add: " + cal.add(a, b));
        console.log("sub: " + cal.sub(a, b));

        // 3. Delete the file
        fs.unlink('cal.js', function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File deleted");
            }
        });
    }
});