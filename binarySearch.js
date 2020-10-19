function binarySearch(list, item) {
    let start = 0, end = list.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const guess = list[mid];
        if (item === guess){
            return mid;
        }else if (guess > item){
            end = mid - 1
        } else {
            start = mid + 1;
        }
    }
    return null;
}

const testList = [1, 3, 5, 7, 9];

console.log(binarySearch(testList, 9));