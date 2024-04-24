/**
 * Trie un tableau en utilisant l'algorithme de tri à bulles.
 * @param {number[]} array - Le tableau à trier.
 * @returns {number[]} - Le tableau trié par ordre croissant.
 */
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
}

/**
 * Trie un tableau en utilisant l'algorithme de tri rapide (quicksort).
 * @param {number[]} array - Le tableau à trier.
 * @returns {number[]} - Le tableau trié par ordre croissant.
 */
function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * Trie un tableau en utilisant l'algorithme de tri par sélection.
 * @param {number[]} array - Le tableau à trier.
 * @returns {number[]} - Le tableau trié par ordre croissant.
 */
function selectionSort(array) {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap elements
      }
    }
  
    return array;
}

/**
 * Trie un tableau en utilisant l'algorithme de tri par insertion.
 * @param {number[]} array - Le tableau à trier.
 * @returns {number[]} - Le tableau trié par ordre croissant.
 */
function insertionSort(array) {
    const n = array.length;
  
    for (let i = 1; i < n; i++) {
      let current = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
  
      array[j + 1] = current;
    }
  
    return array;
}

/**
 * Trie un tableau en utilisant l'algorithme de tri fusion (mergesort).
 * @param {number[]} array - Le tableau à trier.
 * @returns {number[]} - Le tableau trié par ordre croissant.
 */
function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let i = 0;
    let j = 0;
    const mergedArray = [];
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }
    }
  
    return mergedArray.concat(left.slice(i), right.slice(j));
}
  
module.exports = {
    bubbleSort,
    quickSort,
    selectionSort,
    insertionSort,
    mergeSort
};
  