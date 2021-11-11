// Time Convert
// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
// Examples
// Input: 126
// Output: 2:6
// Input: 45
// Output: 0:45
 
function TimeConvert(num) { 

    // code goes here  
  return Math.floor(num / 60) + ':' + (num % 60)
  
    
  
  }