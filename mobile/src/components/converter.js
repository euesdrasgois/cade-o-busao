function createConverter() {
    function numberToHours(value) {
        var hour = parseInt(value);
        var minute = (value - hour) * 60;
        if (minute === 0) {
            minute = "00";
        }
        var time = `${hour}:${minute}`;
        return time;
    }
    return {
        numberToHours,
    };
}

export default createConverter;
