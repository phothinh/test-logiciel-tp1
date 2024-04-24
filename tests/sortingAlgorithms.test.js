const { bubbleSort, quickSort, selectionSort, insertionSort, mergeSort } = require('../src/sortingAlgorithms');
const { isSorted } = require('jest-sorted');

describe('Sorting Algorithms', () => {
  test('Bubble Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
    expect(sortedArray).toBeSorted();
  });

  test('Quick Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = quickSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
    expect(sortedArray).toBeSorted();
  });

  test('Selection Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = selectionSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
    expect(sortedArray).toBeSorted();
  });

  test('Insertion Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
    expect(sortedArray).toBeSorted();
  });

  test('Merge Sort', () => {
    const unsortedArray = [4, 2, 7, 1, 9];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 7, 9]);
    expect(sortedArray).toBeSorted();
  });

});
