const { bubbleSort, quickSort, selectionSort, insertionSort, mergeSort } = require('../src/sortingAlgorithms');

describe('Sorting Algorithms', () => {
  test('Bubble Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
  });

  test('Quick Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
  });

  test('Selection Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = selectionSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
  });

  test('Insertion Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
  });

});
