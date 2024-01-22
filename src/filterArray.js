/**
 *function details:
 *purpose: returns a new array of all the elements from the input array that returns as 'true' by the predicate function's criteria
 *name: filteredArray
 *
 *@param {number[]} inputArray - given array of numbers
 *@param {(element: number[]) => boolean} predicateFn - a condition that will return a boolean expression when fed an element
 *@returns {number[]} resultArray - @returns {number[]} resultArray - all instances of elements in the array that meet condition, return empty resultArray if no elements match condition
 */

function filterArray(inputArray, predicateFn) {
  // create empty array called resultArray
  // for each element of the inputArray
  //    put element into predicate function to evaluate
  //    if (true)
  //        shove element into resultArray
  // return resultArray

  let resultArray = [];

  for (let number of inputArray) {
    if (predicateFn(number)) {
      resultArray.push(number);
    }
  }

  return resultArray;
}

export { filterArray };
