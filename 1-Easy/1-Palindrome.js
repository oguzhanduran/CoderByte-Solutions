// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

// Input: "never odd or even"
// Output: true

// Input: "eye"
// Output: true


function Palindrome(str) { 

    // code goes here 
    let regEx = /[\W_]/g
    let str1 = str.toLowerCase().replace(regEx, "")
    let str2 = str1.split("").reverse().join("")
    return  str2 === str1 ? "true" : "false"
     
  }
     
  // keep this function call here 
  console.log(Palindrome(readline()));