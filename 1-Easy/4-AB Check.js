// AB Check
// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Examples
// Input: "after badly"
// Output: false
// Input: "Laura sobs"
// Output: true

function ABCheck(str) { 

    // code goes here  
  
  let ab = str.search(/a...b/);
  if(ab > -1){
    return true
  }else return false
  
  }
    //  9 puan verdi.
  // keep this function call here 
  console.log(ABCheck(readline()));