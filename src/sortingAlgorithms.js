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
  
  
module.exports = {
    bubbleSort,
    quickSort,
    selectionSort,
};
  