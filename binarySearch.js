//sorting

const arr = [1,3,4,10,23,25];
  const key = 7;
  const result = binarySearch(arr, key);
  
  if (result !== -1) {
    console.log(`Element ${key} found at index ${result}.`);
  } else {
    console.log(`Element ${key} not found in the array.`);
  }
  
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = (left + right) / 2;
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
    return -1;
  }

  