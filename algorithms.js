// get main element
const main = document.getElementById('main');
const generate_array = document.getElementById('generate-array')
// create element
const div = document.createElement('div');
// to hold main element children elements
let array_children = null;

// generate array
function generateNewArray() {
  for (let i = 0; i < 257; i++) {
    const div = document.createElement('div');
    const divHeight = getRandomInteger(10, 650);
    div.style.height = divHeight.toString() + 'px';
    main.appendChild(div);
  }
}

// random number generator
function getRandomInteger(min, max) {
  return Math.random() * (max - min) + min;
}

// generate new array when button is clicked, but also removes any existing child div elements
generate_array.onclick = () => {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  generateNewArray();
  array_children = main.children;
}





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
