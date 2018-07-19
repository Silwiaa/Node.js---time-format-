var OSinfo = require('./modules/OSinfo');
var Time = require('./modules/timeFormat');
var os = require('os');

// SET ENCODING UTF-8
process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !==null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                timeFormat.print();
                break;
        };
    }
});
