// Have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.
// Examples
// Input: "XXXVVIIIIIIIIII"
// Output: L
// Input: "DDLL"
// Output: MC



function RomanNumeralReduction(str) { 

    // code goes here
    var romanNum = {M : 1000, D : 500, C : 100, L : 50, X : 10, V : 5, I : 1};
    var count = 0;
    for(let i = 0; i < str.length; i++){
      const curr = romanNum[str[i]];
      const next = romanNum[str[i+1]];
      (curr < next) ? (count -= curr) : (count += curr);
    }
    var romanStr = ""; 
    for(var roman in romanNum){
      while(count >= romanNum[roman]){
        romanStr += roman;
        count -= romanNum[roman];
      }
    }
    return romanStr; 
  
  }
     
  // keep this function call here 


















  