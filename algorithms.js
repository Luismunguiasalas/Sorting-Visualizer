
const mainEl = document.getElementById('main'); // get main element
const bubbleSortEl = document.getElementById('bubble-sort'); // get bubble sort element
const insertionSortEl = document.getElementById('insertion-sort'); // get insertion sort element
const quickSortEl = document.getElementById('quick-sort'); // get quick sort element
const mergeSortEl = document.getElementById('merge-sort'); // get merge sort element
const generateArrayEl = document.getElementById('generate-array') // create div element
let array_children = null; // to hold array of div elements

/**
 * generateNewArray(): 
 * will create 257 div elements and assign then a random height
 * the div elements will be appended to the 'mainEl'
 */
function generateNewArray() {
  for (let i = 0; i < 257; i++) {
    const div = document.createElement('div');
    const divHeight = getRandomInteger(10, 650); // assing random (height) number 
    div.style.height = divHeight.toString() + 'px'; // add height to div
    mainEl.appendChild(div);
  }
}
/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
// random number generator helper function for 'generateNewArray'
function getRandomInteger(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Event handler:
 * generate new array when button 'generate array' is clicked, also, removes any existing child div elements
 */
generateArrayEl.onclick = () => {
  while (mainEl.firstChild) {
    mainEl.removeChild(mainEl.lastChild);
  }
  generateNewArray();
  array_children = mainEl.children;
}

/** BUBBLESORT */

/**
 * bubbleSort():
 * traverse through all array elements
 * swap if the element foud is grater than the next element
 * @param {Array} unsortedArray 
 */
function bubbleSort(unsortedArray) {
  const n = unsortedArray.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let height = unsortedArray[j].divHeight;
        let height2 = unsortedArray[j + 1].divHeight;
        console.log(height);
        console.log(height2);
        unsortedArray[j], unsortedArray[j + 1] = unsortedArray[j + 1], unsortedArray[j]
      }
    }
  }
}

/**
 * Event handler:
 */

bubbleSortEl.onclick = () => {
  bubbleSort(unsortedArray);
}




/** MERGE SORT SECTION, WORRY ABOUT THIS LATER */
// the merge sort function
// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
