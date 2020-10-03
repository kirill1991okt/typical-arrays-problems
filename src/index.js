exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }
    var min = Math.min(...array);
    return min;
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    var max = Math.max(...array);
    return max;
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
};
