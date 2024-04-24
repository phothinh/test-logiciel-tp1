const { bubbleSort, quickSort, selectionSort, insertionSort, mergeSort } = require('../src/sortingAlgorithms');
const { isSorted } = require('jest-sorted');

// BUBBLE

describe('Bubble Sort', () => {
  test('should sort an empty array', () => {
    const emptyArray = [];
    const sortedArray = bubbleSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  test('should sort a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = bubbleSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reversed array', () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const result = bubbleSort(reversedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle duplicates', () => {
    const arrayWithDuplicates = [4, 2, 7, 1, 9, 2];
    const result = bubbleSort(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 2, 4, 7, 9]);
  });
});

// QUICK SORT

describe('Quick Sort', () => {
  test('should sort an empty array', () => {
    const emptyArray = [];
    const sortedArray = quickSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  test('should sort a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = quickSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reversed array', () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const result = quickSort(reversedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle duplicates', () => {
    const arrayWithDuplicates = [4, 2, 7, 1, 9, 2];
    const result = quickSort(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 2, 4, 7, 9]);
  });
});

// SELECTION SORT

describe('Selection Sort', () => {
  test('should sort an empty array', () => {
    const emptyArray = [];
    const sortedArray = selectionSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  test('should sort a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = selectionSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reversed array', () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const result = selectionSort(reversedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle duplicates', () => {
    const arrayWithDuplicates = [4, 2, 7, 1, 9, 2];
    const result = selectionSort(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 2, 4, 7, 9]);
  });
});

// INSERTION

describe('Insertion Sort', () => {
  test('should sort an empty array', () => {
    const emptyArray = [];
    const sortedArray = insertionSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  test('should sort a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = insertionSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reversed array', () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const result = insertionSort(reversedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle duplicates', () => {
    const arrayWithDuplicates = [4, 2, 7, 1, 9, 2];
    const result = insertionSort(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 2, 4, 7, 9]);
  });
});

// MERGE

describe('Merge Sort', () => {
  test('should sort an empty array', () => {
    const emptyArray = [];
    const sortedArray = mergeSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  test('should sort a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = mergeSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reversed array', () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const result = mergeSort(reversedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle duplicates', () => {
    const arrayWithDuplicates = [4, 2, 7, 1, 9, 2];
    const result = mergeSort(arrayWithDuplicates);
    expect(result).toEqual([1, 2, 2, 4, 7, 9]);
  });
});