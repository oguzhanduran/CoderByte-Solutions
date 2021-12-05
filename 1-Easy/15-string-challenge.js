// String Challenge
// Have the function StringChallenge(str) take the str parameter being passed and return it in proper snake case format where each word is lowercased and separated from adjacent words via an underscore. The string will only contain letters and some combination of delimiter punctuation characters separating each word.

// For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding.
// Examples
// Input: "cats AND*Dogs-are Awesome"
// Output: cats_and_dogs_are_awesome
// Input: "a b c d-e-f%g"
// Output: a_b_c_d_e_f_g

function StringChallenge(str) { 

    // code goes here  
    let regEx = /[\W]/g;
    let str1 = str.toLowerCase().replace(regEx, "_")
    return str1
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));