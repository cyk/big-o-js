// Best: O(n)
// Average: O(n²)
// Worst: O(n²)

module.exports.bubbleSort = function(arr) {
  'use strict';

  function swap(arr, leftIdx, rightIdx) {
    let item = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = item;
  }

  for (let idx = 0; idx < arr.length; ++idx) {
    let swapped = false;

    // iterate over one less element (lastIdx) until there are no more elements left to sort
    for (let idx = 0, lastIdx = (arr.length - idx); idx < lastIdx; ++idx) {

      // swap position with adjacent item if not ordered
      if (arr[idx] > arr[idx + 1]) {
        swap(arr, idx, idx + 1);
        swapped = true;
      }
    }

    // if no swaps occur then list is sorted
    if (!swapped) { break; }
  }

  return arr;
};
