// Array Addition

//    Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
//    Examples
//    Input: [5,7,16,1,2] 
//    Output: false
//    Input: [3,5,-1,8,12]
//    Output: true

function ArrayAddition(arr) {  // [3,5,-1,8,12]

    // code goes here  
    
  arr.sort(function(a, b){return b - a}) // [12, 8, 5, 3, -1]
  let arr1 = ""
  let largestNumber = ""
  
  arr1 = arr.slice(1) // [8, 5, 3, -1]
  largestNumber = arr.slice(0,1) // [12]
  
  let sum = arr1.reduce((acc, number) => acc + number) // 15
  
  for (let i = arr1.length - 1; i>= 0; i--) {
    if(sum - arr[i] == largestNumber) { // 15 - 3 = 12
      return true
    }
    if (largestNumber - sum == 0) { 
      return true
    }
  }
  
  return false
  }
     
  // keep this function call here 
  console.log(ArrayAddition(readline()));