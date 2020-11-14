function quicksort(arr){
    if (arr.length < 2)
        return arr;
    const pivot = arr.shift();
    const less = arr.filter(item => item <= pivot);
    const greater = arr.filter(item => item > pivot);
    return quicksort(less).concat(pivot, quicksort(greater));
}

console.log(quicksort([10,4,5,2,3]));