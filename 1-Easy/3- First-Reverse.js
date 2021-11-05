// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I

function FirstReverse(str) { 

    // code goes here  
    let result = ""
    result = str.split("").reverse().join("")
    return result; 
  
  }
  
  // Dizeyi tersine çevirmek için split, reverse ve join methodları kullanılır. Yani bir dize varsa önce diziye çevirip sonra tersine çevirmeliyiz. 
  // Örneğin
  
  let str = '123456789';
  
  let arr1 = str.split(''); ["1","2","3","4","5","6","7","8","9"]
  let arr2 = arr1.reverse(); ["9","8","7","6","5","4","3","2","1"]
  let result = arr2.join(''); "987654321"
  
  console.log(result);