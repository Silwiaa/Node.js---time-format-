var os = require('os');
    
function timeFormat() {
    var upTime = os.uptime(),
        round = Math.round(upTime),
        upTimeHour = Math.floor(round/3600),
        upTimeMin = Math.floor(round/60 - upTimehour*60),
        upTimeSek = round - (upTimeMin*60) - (upTimehour*3600);
    
    console.log('Uptime: ').red + upTimeHour + ' h ' + upTimeMin + ' min and ' + upTimeSek + ' s ';
}

exports.print = timeFormat;
