// Best: O(n)
// Average: O(n²)
// Worst: O(n²)

module.exports.insertionSort = function(arr) {
  'use strict';

  function swap(arr, leftIdx, rightIdx) {
    let item = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = item;
  }

  arr.forEach((item, idx) => {
    for (let jdx = idx + 1; jdx > 0; --jdx) {
      // swap position with previous adjacent item until ordered
      if (arr[jdx - 1] > arr[jdx]) {
        swap(arr, jdx, jdx - 1);
      }
    }
  });

  return arr;
};
