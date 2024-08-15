const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      // Start a new subarray
      result.push(currentSubarray);
      currentSubarray = [];
      currentSum = 0;
    }
    currentSubarray.push(arr[i]);
    currentSum += arr[i];
  }

  // Push the last subarray if not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = 5;
console.log(divide(arr, n)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

