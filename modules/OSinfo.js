var os = require('os'),
    colors = require('colors')
    timeFormat = require('./timeFormat');

function getOSinfo() {
    var type = os.type();
    
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    
    var release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = os.uptime(),
        userInfo = os.userInfo();
    
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: ~'.green, timeFormat.print(uptime));
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.grey, userInfo.homedir);
}

//EXPORT getOSinfo
exports.print = getOSinfo;
