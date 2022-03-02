// Javascript implementation of the binary search algorithm

var data = [2, 30, 41, 53, 67, 92, 110, 203, 410, 775, 901, 945];
console.log(getIndexOf(data, 901));

function getIndexOf(data, value) {

    var lowerIndex = 0;
    var higherIndex = data.length;
    var middleIndex;

    while (higherIndex >= lowerIndex) {

        middleIndex = Math.floor((lowerIndex + higherIndex) / 2);

        if (data[middleIndex] > value) {
            higherIndex = middleIndex - 1;
        } else if (data[middleIndex] < value) {
            lowerIndex = middleIndex + 1;
        } else {
            return data[middleIndex] ? middleIndex : -1;
        }

    }

    return -1;

}
