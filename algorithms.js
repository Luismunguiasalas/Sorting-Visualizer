
const mainEl = document.getElementById('main'); // get main element
const bubbleSortEl = document.getElementById('bubble-sort'); // get bubble sort element
const insertionSortEl = document.getElementById('insertion-sort'); // get insertion sort element
const quickSortEl = document.getElementById('quick-sort'); // get quick sort element
const mergeSortEl = document.getElementById('merge-sort'); // get merge sort element
const comparisonEl = document.getElementById('comparison'); //get comparison element
const timeComplexityEl = document.getElementById('time-complexity'); // get time complexity element
const generateArrayEl = document.getElementById('generate-array') // get generate array element
let array_children = null; // to hold array of div elements

/**
 * generateNewArray(): 
 * will create 25 div elements and assign then a random height
 * the div elements will be appended to the 'mainEl'
 */
function generateNewArray() {
  for (let i = 0; i < 25; i++) {
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
  return Math.ceil(Math.random() * (max - min) + min);
}

/**
 * Event handler:
 * generate new array when button 'generate array' is clicked, also, removes any existing child div elements
 */

bubbleSortEl.onclick = () => {
  timeComplexityEl.innerText = 'O(N^2)'
  bubbleSort(array_children);
};

generateArrayEl.onclick = () => {
  while (mainEl.firstChild) {
    mainEl.removeChild(mainEl.lastChild);
  }
  generateNewArray();
  array_children = mainEl.children;
  timeComplexityEl.innerText = '';
}


/** BUBBLESORT */

/**
 * bubbleSort():
 * traverse through all array elements
 * swap if the element foud is grater than the next element
 * @param {Array} unsortedArray 
 */
async function bubbleSort(unsortedArray) {

  let swaps = 0
  comparisonEl.innerText = swaps;
  const n = unsortedArray.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++) {
      let leftHeight = parseInt(unsortedArray[j].style.height);
      let rightHeight = parseInt(unsortedArray[j + 1].style.height);

      // need to promise 
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 5)
      );


      if (leftHeight > rightHeight) {
        unsortedArray[j].style.backgroundColor = 'coral';
        unsortedArray[j + 1].style.backgroundColor = 'coral';
        swaps += 1;
        comparisonEl.innerText = swaps;
        await swap(unsortedArray[j], unsortedArray[j + 1]);
        unsortedArray[j].style.backgroundColor = 'darkseagreen';
        unsortedArray[j + 1].style.backgroundColor = 'darkseagreen';
      }
    }
  }
}
/**
 * 
 * @param {Element} leftDiv 
 * @param {Element} rightDiv 
 * @returns 
 */
async function swap(leftDiv, rightDiv) {
  return new Promise((resolve) => {
    let leftHeight = leftDiv.style.height;
    let rightHeight = rightDiv.style.height;
    leftDiv.style.height = rightHeight;
    rightDiv.style.height = leftHeight;

    window.requestAnimationFrame(() => {
      setTimeout(() => {
        resolve();
      }, 67)
    })
  })
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

