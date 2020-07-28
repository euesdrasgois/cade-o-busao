compare(15.5);

function compare(valor) {
    const minutes = valor * 60;
    const now = getTime();
    return minutes - now;
}

function getTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    minute += hour * 60;
    return minute;
}
