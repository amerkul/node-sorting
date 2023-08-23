function bubbleSort(arr) {
    if (!Array.isArray(arr)){
         throw new Error("Provided argument is not an array");
    }
    const copy = JSON.parse((JSON.stringify(arr)));
    for (let i = 0; i < copy.length; i++) {
        for (let j = copy.length - 1; j >= i; j--) {
            if (copy[j - 1] > copy[j]) {
                let temp = copy[j - 1];
                copy[j - 1] = copy[j];
                copy[j] = temp;
            }
        }
    }
    return copy;
}

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function quickSortRec(arr, left, right) {
    if (left >= right) {
        return;
    }
    let pivot = left;
    let leftIndex = left + 1;
    let rightIndex = right;
    while (leftIndex <= rightIndex) {
        if (arr[leftIndex] > arr[pivot]
            && arr[rightIndex] < arr[pivot]) {
            swap(arr, leftIndex, rightIndex);
        }
        if (arr[leftIndex] <= arr[pivot]) {
            leftIndex++;
        }
        if (arr[rightIndex] >= arr[pivot]) {
            rightIndex--;
        }
    }
    swap(arr, rightIndex, pivot);
    quickSortRec(arr, left, rightIndex - 1);
    quickSortRec(arr, rightIndex + 1, right);
}

function quickSort(arr) {
    if (!Array.isArray(arr)){
        throw new Error("Provided argument is not an array");
    }
    const copy = JSON.parse((JSON.stringify(arr)));
    const length = copy.length;
    let leftIndex = 0;
    let rightIndex = length - 1;
    quickSortRec(copy, leftIndex, rightIndex);
    return copy;
}

function merge(arr, fromFirst, toFirst, fromTwo, toTwo, buffer) {
    while (fromFirst <= toFirst && fromTwo <= toTwo) {
        if (arr[fromFirst] <= arr[fromTwo]) {
            swap(arr, fromFirst, buffer);
            fromFirst++;
        } else {
            swap(arr, fromTwo, buffer);
            fromTwo++;
        }
        buffer++;
    }
    while (fromFirst <= toFirst) {
        swap(arr, fromFirst, buffer);
        fromFirst++;
        buffer++;
    }
    while (fromTwo <= toTwo) {
        swap(arr, fromTwo, buffer);
        fromTwo++;
        buffer++;
    }
}

function sortWithBuffer(arr, start, end, buffer) {
    if (start >= end) {
        swap(arr, start, buffer);
        return;
    }
    let mid = ~~((start + end) / 2);
    advancedMergeSort(arr, start, mid);
    advancedMergeSort(arr, mid + 1, end);
    merge(arr, start, mid, mid + 1, end, buffer);
}

function advancedMergeSort(arr, start, end) {
    if (start < end) {
        let mid = ~~((start + end + 1) / 2 - 1);
        let buffer = end - (mid - start);
        sortWithBuffer(arr, start, mid, buffer);
        let left2 = buffer;
        let right2 = end;
        let left1 = start;
        let right1 = left2 - 1;
        while (right1 - left1 > 1) {
            let mid = ~~((left1 + right1) / 2);
            let len = right1 - mid;
            sortWithBuffer(arr, mid + 1, right1, left1);
            merge(arr, left1, left1 + len - 1, left2, right2, right1 - len + 1);
            right1 = right1 - len;
            left2 = right1 + 1;
        }
        for (let i = right1; i >= left1; i--) {
            let j = i + 1;
            while (j <= end && arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
                j++;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (!Array.isArray(arr)){
        throw new Error("Provided argument is not an array");
    }
    const copy = JSON.parse((JSON.stringify(arr)));
    return advancedMergeSort(copy, 0, copy.length - 1);
}

export {bubbleSort, quickSort, mergeSort};