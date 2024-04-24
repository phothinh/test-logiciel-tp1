const { bubbleSort, quickSort, selectionSort, insertionSort, mergeSort } = require('../src/sortingAlgorithms');
const { isSorted } = require('jest-sorted');

// BUBBLE

describe('Bubble Sort', () => {
  test('should sort an empty array', () => {
    expect(bubbleSort([])).toBeSorted();
  });

  test('should sort a sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toBeSorted();
  });

  test('should sort a reversed array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toBeSorted();
  });

  test('should handle duplicates', () => {
    expect(bubbleSort([4, 2, 7, 1, 9, 2])).toBeSorted();
  });
});

// QUICK SORT

describe('Quick Sort', () => {
  test('should sort an empty array', () => {
    expect(quickSort([])).toBeSorted();
  });

  test('should sort a sorted array', () => {
    expect(quickSort([1, 2, 3, 4, 5])).toBeSorted();
  });

  test('should sort a reversed array', () => {
    expect(quickSort([5, 4, 3, 2, 1])).toBeSorted();
  });

  test('should handle duplicates', () => {
    expect(quickSort([4, 2, 7, 1, 9, 2])).toBeSorted();
  });
});

// SELECTION SORT

describe('Selection Sort', () => {
  test('should sort an empty array', () => {
    expect(selectionSort([])).toBeSorted();
  });

  test('should sort a sorted array', () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toBeSorted();
  });

  test('should sort a reversed array', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toBeSorted();
  });

  test('should handle duplicates', () => {
    expect(selectionSort([4, 2, 7, 1, 9, 2])).toBeSorted();
  });
});

// INSERTION

describe('Insertion Sort', () => {
  test('should sort an empty array', () => {
    expect(insertionSort([])).toBeSorted();
  });

  test('should sort a sorted array', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toBeSorted();
  });

  test('should sort a reversed array', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toBeSorted();
  });

  test('should handle duplicates', () => {
    expect(insertionSort([4, 2, 7, 1, 9, 2])).toBeSorted();
  });
});

// MERGE

describe('Merge Sort', () => {
  test('should sort an empty array', () => {
    expect(mergeSort([])).toBeSorted();
  });

  test('should sort a sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toBeSorted();
  });

  test('should sort a reversed array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toBeSorted();
  });

  test('should handle duplicates', () => {
    expect(mergeSort([4, 2, 7, 1, 9, 2])).toBeSorted();
  });
});