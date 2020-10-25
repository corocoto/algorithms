function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr); // [1, 2, 3, 4, 5, 6]