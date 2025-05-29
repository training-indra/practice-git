// Function to perform bubble sort on an array
function bubbleSort(arr) {
    const n = arr.length;

    // Outer loop for number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparisons in each pass
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort([...array]));
