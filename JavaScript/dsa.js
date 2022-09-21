
//Linear Search
function linearSearch(array, key) {
  for(let i =0; i < array.length; i++){
  if(array[i] === key) {
    return i;
    }
  }
  return -1;
}
//test
function verifyLinearSearch(index){
  if(index != -1){
    console.log("Target found at index: ",index)
  }else{
    console.log("Target found in the list")
  }
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const result = linearSearch(numbers, 9)

verifyLinearSearch(result)

//Binary Search
function binarySearch(array, key){
  let first = 0
  let last = array.length -1
  while(first <= last) {
    const middle = first + Math.floor((last - first)/2)
    if(array[middle] === key) {
      return middle;
    }else if(array[middle] < key){
      first = middle + 1;
    }else {
      last = middle - 1
    }
  }
  return -1
}
//test
function verifyBinarySearch(index){
  if(index != -1){
    console.log("Target found at index: ",index)
  }else{
    console.log("Target found in the list")
  }
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const result = binarySearch(numbers, 14)

verifyBinarySearch(result)

//Recursive Binary Search
function recursiveBinarySearch(array, key) {
  if(array.length == 0){
    return false
  }else{
    const middle = Math.floor(array.length/2)
    if(array[middle] == key){
      return true
    }else{
      if(array[middle] < key){
          return recursiveBinarySearch(array.slice(middle + 1), key)
      }else{
        return recursiveBinarySearch(array.slice(0, middle), key)
      }
    }
  }
}
//test
function verifyRecursiveBinary(result){
  console.log("Target found: ", result)
}
const numbers = [1,2,3,4,5,6,7,8]
const result =  recursiveBinarySearch(numbers, 12)
verifyRecursiveBinary(result)

const result =  recursiveBinarySearch(numbers, 6)
verifyRecursiveBinary(result) 

//1:35