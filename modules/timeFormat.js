function timeFormat(time) {
    var round = Math.round(time),
        hour = Math.floor(round / 3600),
        minute = Math.floor(round / 60 - hour * 60),
        second = round - (hour * 3600) - (minute * 60);
    
   console.log('Uptime: ' + hour + 'h ' + minute + 'min ' + second + 'sek');
};

exports.print = timeFormat;

