function binarySearch(array, element) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    while (array[middleIndex] !== element && firstIndex <= lastIndex) {
        if(array[middleIndex] > element) {
                lastIndex = middleIndex - 1;
        }else {
                firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }
    return array[middleIndex] === element ? middleIndex : -1;
}

const array = [2, 3, 6, 8, 10, 12];
console.log(binarySearch(array, 8)); 
