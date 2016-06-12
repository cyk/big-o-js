// Best: O(n²)
// Average: O(n²)
// Worst: O(n²)

module.exports.selectionSort = function(arr) {
  'use strict';

  function swap(arr, leftIdx, rightIdx) {
    let item = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = item;
  }

  let minIdx = 0;

  arr.forEach((item, idx) => {
    minIdx = idx;

    // check if any remaining items are smaller
    for (let idx = minIdx + 1; idx < arr.length; ++idx) {
      if (arr[idx] < arr[minIdx]) { minIdx = idx; }
    }

    // swap if smaller item was found
    if (idx != minIdx) { swap(arr, idx, minIdx); }
  });

  return arr;
};
