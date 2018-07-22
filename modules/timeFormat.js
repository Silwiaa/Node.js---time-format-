function timeFormat(upTime) {
    var round = Math.round(upTime),
        upTimeHour = Math.floor(round/3600),
        upTimeMin = Math.floor(round/60 - upTimeHour*60),
        upTimeSek = round - (upTimeMin*60) - (upTimeHour*3600);
    
    console.log('Uptime: '.red + upTimeHour + ' h ' + upTimeMin + ' min and ' + upTimeSek + ' s ');
}

exports.print = timeFormat;
