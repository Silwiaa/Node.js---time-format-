//IMPORT MODULES
var OSinfo = require('../modules/OSinfo');

//SET ENCODING UTF-8
process.stdin.setEncoding('utf-8');

//REACT FOR USER ACTION
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !==null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case '/version':
                console.log(process.version);
                console.log(process.env.LANG);
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default: 
                process.stderr.write('Wrong instruction!\n');
        }
    }
});
