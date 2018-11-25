var os = require('os'),
    timeFormat = require('./timeFormat');

function getOSinfo() {
    var type = os.type();
    
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    
    var release = os.release(),
        cpu = os.cpus()[0].model,
        uptime = os.uptime(),
        userInfo = os.userInfo();
    
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU model: ', cpu);
    console.log('Uptime: ~ ', timeFormat.print(uptime));
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
}

exports.print = getOSinfo;
