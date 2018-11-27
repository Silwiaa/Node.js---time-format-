//IMPORT MODULES
var EventEmitter = require('events').EventEmitter,
    OSinfo = require('./modules/OSinfo'),
    color = require('colors');

//NEW OBJECT
var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: '.red + instruction.red + ' trying to run command.')
});

emitter.on('afterCommand', function() {
    console.log('Finished command!'.red);
});

//SET ENCODING UTF-8
process.stdin.setEncoding('utf-8');

//REACT FOR USER ACTION
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !==null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
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
        };
        emitter.emit('afterCommand');
    }
});
