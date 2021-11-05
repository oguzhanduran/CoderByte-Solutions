// First Method

// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

// Input: "aabbcde"
// Output: 2a2b1c1d1e

// Input: "wwwbbbw"
// Output: 3w3b1w

 // First Method

 function RunLength(str) { 

    // code goes here  
  if (!str) return '' 
  let encode = '';
  
  for(let i = 0; i <str.length; i++) {
    let counter = 1
    for(let j = i; j < str.length; j++) {
      if(str[i] !== str[j+1]) break;
        counter++;
        i++;
    }  
    encode += counter === 1 ? str[i] : counter + str[i];
  } 
  
  return encode;
  }
     
  // keep this function call here 
  console.log(RunLength(readline()));

  // Second Method

  function RunLength(str) { 

    // code goes here  
  
  var result = '';
  
  if (str.length > 0) {
    let counter = 1;
    var value = str[0];
    for(let i = 1; i <str.length; i++) {
      var entry = str[i];
      if(entry == value) {
        counter++
      }else {
        result += counter + value;
        counter = 1;
        value = entry;
      }
    }
      result += counter + '' + entry;
  }
  return result;
  }
  
     
  // keep this function call here 
  console.log(RunLength(readline()));

