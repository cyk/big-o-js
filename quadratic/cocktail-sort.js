// Best: O(n)
// Average: O(n²)
// Worst: O(n²)

module.exports.cocktailSort = function(arr) {
  'use strict';

  function swap(arr, leftIdx, rightIdx) {
    let item = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = item;
  }

  for (let idx = 0; idx < arr.length; ++idx) {
    let swapped = false;

    // iterate over one less element (lastIdx) until there are no more elements left to sort
    for (let jdx = 0, lastJdx = (arr.length - idx); jdx < lastJdx; ++jdx) {

      // swap position with adjacent item if not ordered
      if (arr[jdx] > arr[jdx + 1]) {
        swap(arr, jdx, jdx + 1);
        swapped = true;
      }
    }

    // if no swaps occur then list is sorted
    if (!swapped) { break; }

    // same as iteration above but in reverse
    for (let jdx = (arr.length - idx), lastJdx = idx; jdx > lastJdx; --jdx) {

      // swap position with adjacent item if not ordered
      if (arr[jdx] < arr[jdx - 1]) {
        swap(arr, jdx, jdx - 1);
        swapped = true;
      }
    }

    // again, if no swaps occur then list is sorted
    if (!swapped) { break; }
  }

  return arr;
};
